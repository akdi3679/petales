import { z } from "zod";

const EnvSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),

  SITE_URL: z.string().url().default("http://localhost:3000"),

  DATABASE_URL: z.string().min(1).optional(),

  RESEND_API_KEY: z.string().min(1).optional(),

  SANITY_PROJECT_ID: z.string().min(1).optional(),
  SANITY_DATASET: z.string().min(1).optional(),
  SANITY_API_TOKEN: z.string().min(1).optional(),

  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().min(1).optional(),
  TURNSTILE_SECRET_KEY: z.string().min(1).optional(),

  ADMIN_EMAIL: z.string().email().optional(),
});

export const env = EnvSchema.parse(process.env);

export const isProduction = env.NODE_ENV === "production";
export const isDevelopment = env.NODE_ENV === "development";