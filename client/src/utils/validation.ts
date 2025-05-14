// import { z } from 'zod';

// export const signUpSchema = z.object({
//   email: z.string().email('Invalid email address'),
//   name: z.string().min(3, 'Name must be at least 3 characters'),
//   password: z.string()
//     .min(8, 'Password must be at least 8 characters')
//     .regex(/[a-zA-Z]/, 'Password must contain at least one letter')
//     .regex(/[0-9]/, 'Password must contain at least one number')
//     .regex(/[^a-zA-Z0-9]/, 'Password must contain at least one special character'),
// });

// export const signInSchema = z.object({
//   email: z.string().email('Invalid email address'),
//   password: z.string().min(1, 'Password is required'),
// });

// export type SignUpFormData = z.infer<typeof signUpSchema>;
// export type SignInFormData = z.infer<typeof signInSchema>;

import * as z from "zod";

export const signUpSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3, "Name must be at least 3 characters"),
  password: z
    .string()
    .min(8)
    .regex(/[A-Za-z]/, "At least one letter")
    .regex(/\d/, "At least one number")
    .regex(/[!@#$%^&*(),.?":{}|<>]/, "At least one special character"),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Password is required"),
});
