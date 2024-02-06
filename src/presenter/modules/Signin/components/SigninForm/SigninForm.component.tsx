import { Box } from "@/presenter/components/atoms/Box.atom";
import CustomFormInput from "@/presenter/components/custom/CustomFormInput.component";
import React from "react";
import { Control, Controller } from "react-hook-form";
import { SignInFormSchema } from "./signin.schema";

type Props = {
  control: Control<SignInFormSchema, any>;
};

export default function SigninForm({ control }: Props) {
  return (
    <Box gap="m">
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <CustomFormInput
            label="E-mail"
            leadingIcon="email"
            onChangeText={onChange}
            value={value}
            error={error?.message}
            keyBoardType="email-address"
            placeholder="Digite seu e-mail"
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <CustomFormInput
            label="Senha"
            leadingIcon="password"
            onChangeText={onChange}
            value={value}
            error={error?.message}
            isPassword
            placeholder="Digite sua senha"
          />
        )}
      />
    </Box>
  );
}
