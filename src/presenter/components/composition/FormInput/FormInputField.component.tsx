import Input from "@/presenter/components/atoms/Input.atom";
import React from "react";
import { KeyboardTypeOptions } from "react-native";

type Props = {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  isPassword?: boolean;
  keyBoardType?: KeyboardTypeOptions;
};

export default function FormInputField({ isPassword, ...props }: Props) {
  return (
    <Input
      flex={1}
      padding="none"
      borderRadius="none"
      borderWidth={0}
      secureTextEntry={isPassword}
      {...props}
    />
  );
}
