import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations';
import nodemailer from 'nodemailer';

// Rate limiting: simple in-memory store (replace with Redis in production)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;        // max requests
const RATE_WINDOW = 60_000;  // per 60 seconds

function getRealIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const ip = getRealIp(req);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed.', details: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const { name, email, phone, message, interest } = parsed.data;

  // Ensure required env vars exist
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_RECIPIENT } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_RECIPIENT) {
    console.error('Missing SMTP environment variables');
    return NextResponse.json(
      { error: 'Server configuration error.' },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const html = `
    <h2>New Lead from Website</h2>
    <table cellpadding="8" style="border-collapse:collapse;font-family:sans-serif;">
      <tr><td><b>Name</b></td><td>${name}</td></tr>
      <tr><td><b>Email</b></td><td>${email}</td></tr>
      <tr><td><b>Phone</b></td><td>${phone ?? 'Not provided'}</td></tr>
      <tr><td><b>Interest</b></td><td>${interest}</td></tr>
      <tr><td><b>Message</b></td><td>${message}</td></tr>
    </table>
  `;

  try {
    await transporter.sendMail({
      from: `"Website Lead" <${SMTP_USER}>`,
      to:   CONTACT_RECIPIENT,
      replyTo: email,
      subject: `New Lead: ${name} — ${interest}`,
      html,
    });
  } catch (err) {
    console.error('Failed to send email:', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
