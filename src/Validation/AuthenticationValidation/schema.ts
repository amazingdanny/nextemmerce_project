import { z } from "zod";

export const AuthenticationSchemaSignUp = z.object({
    name : z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
    email: z.string().email("invalid email"),
    password: z.string().min(6),
});

export const AuthenticationSchemaSignIn = z.object({
    email: z.string().email("invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});