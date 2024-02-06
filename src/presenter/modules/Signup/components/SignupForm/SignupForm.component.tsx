import { Box } from "@/presenter/components/atoms/Box.atom";
import CustomFormInput from "@/presenter/components/custom/CustomFormInput.component";
import React from "react";
import { Control, Controller } from "react-hook-form";
import { SignupFormSchema } from "../../Signup.model";

type Props = {
  control: Control<SignupFormSchema, any>;
};

export default function SignupForm({ control }: Props) {
  return (
    <Box gap="m">
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <CustomFormInput
            label="Email"
            onChangeText={onChange}
            value={value}
            error={error?.message}
            placeholder="Digite seu email"
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <CustomFormInput
            label="Senha"
            onChangeText={onChange}
            value={value}
            error={error?.message}
            isPassword
            placeholder="Digite sua senha"
          />
        )}
      />
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <CustomFormInput
            label="Confirmar senha"
            onChangeText={onChange}
            value={value}
            error={error?.message}
            isPassword
            placeholder="Digite a confirmação da senha"
          />
        )}
      />
    </Box>
  );
}
