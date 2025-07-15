import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters"),

  lastName: z.string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters"),

  phone: z.string()
    //.email("Invalid email address")
    .max(12, "Email must be less than 100 characters"),

  subject : z.string()
    .min(3, "Subject must be at least 3 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});