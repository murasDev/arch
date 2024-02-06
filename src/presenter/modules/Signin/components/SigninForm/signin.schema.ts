import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(8, "A senha deve conter pelo menos 8 caracteres."),
});

export type SignInFormSchema = z.infer<typeof signInFormSchema>;
