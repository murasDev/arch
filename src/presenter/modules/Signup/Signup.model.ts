import { NonAuthRouteType } from "@/core/routes/nonAuth";
import { NavigationProp } from "@react-navigation/native";
import { z } from "zod";

export type SignupNavigationProp = NavigationProp<NonAuthRouteType, "Signup">;

export const signupFormSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8, "A senha deve conter no mínimo 8 caracteres."),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não batem, confirme a senha corretamente.",
  });

export type SignupFormSchema = z.infer<typeof signupFormSchema>;
