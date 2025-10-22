import { z } from 'zod';
import { EMAIL_MESSAGES } from '../constants/error-messages';

export const emailSchema = z.object({
  email: z
    .string({
      required_error: EMAIL_MESSAGES.EMAIL_REQUIRED,
    })
    .min(1, EMAIL_MESSAGES.EMAIL_REQUIRED)
    .email(EMAIL_MESSAGES.EMAIL_INVALID)
    .max(255, EMAIL_MESSAGES.EMAIL_MAX_LENGTH)
    .toLowerCase()
    .trim(),
});

// Schema solo para el campo email (sin objeto wrapper)
export const emailFieldSchema = z
  .string({
    required_error: EMAIL_MESSAGES.EMAIL_REQUIRED,
  })
  .min(1, EMAIL_MESSAGES.EMAIL_REQUIRED)
  .email(EMAIL_MESSAGES.EMAIL_INVALID)
  .max(255, EMAIL_MESSAGES.EMAIL_MAX_LENGTH)
  .toLowerCase()
  .trim();

// Tipos inferidos
export type EmailSchema = z.infer<typeof emailSchema>;
export type EmailField = z.infer<typeof emailFieldSchema>;