import { z } from 'zod';

export const applicationValidationSchema = z.object({
  body: z.object({
    job_id: z.string().min(1, 'Job ID is required'),
    name: z.string().min(1, 'Name is required'),
    email: z
      .string()
      .min(1, 'Email is required')
      .email({ message: 'Invalid email address' }),
    resume_link: z
      .string()
      .min(1, 'Resume link is required')
      .url({ message: 'Invalid URL for resume link' }),
    cover_note: z.string().min(1, 'Cover note is required'),
  }),
});
