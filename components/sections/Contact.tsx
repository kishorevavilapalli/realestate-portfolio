'use client';
import { useState }      from 'react';
import { useForm }        from 'react-hook-form';
import { zodResolver }    from '@hookform/resolvers/zod';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import SectionHeading     from '@/components/ui/SectionHeading';
import Button             from '@/components/ui/Button';
import { cn }             from '@/lib/utils';
import { contactSchema, type ContactSchema } from '@/lib/validations';
import type { AgentConfig } from '@/types';

const interests = [
  { value: 'buying',    label: 'Buying' },
  { value: 'selling',   label: 'Selling' },
  { value: 'investing', label: 'Investing' },
  { value: 'other',     label: 'Other' },
] as const;

const inputCls = 'w-full px-4 py-3 border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[var(--color-gold)] transition-colors';
const errorCls = 'text-red-500 text-xs mt-1';

export default function Contact({ agent }: { agent: AgentConfig }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchema>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactSchema) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-pad bg-[var(--color-navy)]" aria-label="Contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* Left — info */}
        <div>
          <SectionHeading
            eyebrow="Get In Touch"
            title={"Let\'s Find Your\nPerfect Home"}
            light
          />
          <p className="text-gray-400 text-sm leading-relaxed mb-10">
            Whether you are ready to list, searching for your first home, or exploring investment opportunities — reach out today for a no-obligation consultation.
          </p>
          <ul className="space-y-5">
            {[
              { Icon: Phone,  val: agent.phone, href: `tel:${agent.phone}` },
              { Icon: Mail,   val: agent.email, href: `mailto:${agent.email}` },
              { Icon: MapPin, val: agent.address, href: '#' },
            ].map(({ Icon, val, href }) => (
              <li key={val} className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 bg-[var(--color-gold)]/10 flex items-center justify-center rounded-full">
                  <Icon size={16} className="text-[var(--color-gold)]" />
                </div>
                <a href={href} className="text-gray-300 text-sm hover:text-[var(--color-gold)] transition-colors leading-relaxed mt-2">
                  {val}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — form */}
        <div className="bg-white p-8 md:p-10">
          {status === 'success' ? (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <CheckCircle2 size={48} className="text-emerald-500" />
              <h3 className="font-serif text-2xl text-[var(--color-navy)]">Message Received!</h3>
              <p className="text-[var(--color-muted)] text-sm">Thank you for reaching out. I will be in touch within 24 hours.</p>
              <Button variant="outline" onClick={() => setStatus('idle')}>Send Another Message</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Contact form">
              <p className="font-serif text-[var(--color-navy)] text-2xl mb-6">Send a Message</p>

              {/* Interest selector */}
              <div className="mb-5">
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-500 block mb-2">I am interested in</label>
                <div className="grid grid-cols-2 gap-2">
                  {interests.map(({ value, label }) => (
                    <label key={value} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="radio" value={value} {...register('interest')}
                        className="accent-[var(--color-gold)]" />
                      {label}
                    </label>
                  ))}
                </div>
                {errors.interest && <p className={errorCls}>{errors.interest.message}</p>}
              </div>

              <div className="space-y-4 mb-5">
                <div>
                  <input {...register('name')} placeholder="Full Name *" className={inputCls} />
                  {errors.name && <p className={errorCls}>{errors.name.message}</p>}
                </div>
                <div>
                  <input {...register('email')} type="email" placeholder="Email Address *" className={inputCls} />
                  {errors.email && <p className={errorCls}>{errors.email.message}</p>}
                </div>
                <div>
                  <input {...register('phone')} type="tel" placeholder="Phone Number (optional)" className={inputCls} />
                  {errors.phone && <p className={errorCls}>{errors.phone.message}</p>}
                </div>
                <div>
                  <textarea {...register('message')} placeholder="Your message *" rows={4} className={cn(inputCls, 'resize-none')} />
                  {errors.message && <p className={errorCls}>{errors.message.message}</p>}
                </div>
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-sm mb-4">Something went wrong. Please try again or call directly.</p>
              )}

              <Button type="submit" size="lg" className="w-full" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </Button>

              <p className="text-xs text-gray-400 mt-3 text-center">
                Your information is kept strictly confidential and never shared.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
