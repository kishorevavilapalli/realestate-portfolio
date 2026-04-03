import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(80, 'Name is too long')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(254, 'Email is too long'),
  phone: z
    .string()
    .regex(/^[\+]?[0-9\s\(\)\-]{7,20}$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message is too long (max 1000 characters)'),
  interest: z.enum(['buying', 'selling', 'investing', 'other'], {
    errorMap: () => ({ message: 'Please select an area of interest' }),
  }),
});

export type ContactSchema = z.infer<typeof contactSchema>;
