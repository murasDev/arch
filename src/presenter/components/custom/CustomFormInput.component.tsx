import useAppTheme from "@/presenter/hooks/useAppTheme";
import React from "react";
import { KeyboardTypeOptions, TouchableOpacity } from "react-native";
import Icon from "../atoms/Icon.component";
import { FormInput } from "../composition/FormInput";
import { IconName } from "../types";

type Props = {
  leadingIcon?: IconName;
  label?: string;
  value: string;
  placeholder?: string;
  isPassword?: boolean;
  error?: string;
  keyBoardType?: KeyboardTypeOptions;
  onChangeText: (text: string) => void;
};

export default function CustomFormInput({
  leadingIcon,
  value,
  error,
  isPassword,
  keyBoardType,
  placeholder,
  label,
  onChangeText,
}: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const theme = useAppTheme();

  return (
    <FormInput.Root>
      {label && <FormInput.Label>{label}</FormInput.Label>}
      <FormInput.FieldBox isError={!!error}>
        {leadingIcon && (
          <Icon name={leadingIcon} size={24} color="primaryCardBorderColor" />
        )}
        <FormInput.Field
          onChangeText={onChangeText}
          value={value}
          isPassword={isPassword && !isPasswordVisible}
          keyBoardType={keyBoardType}
          placeholder={placeholder}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible((prev) => !prev)}
            activeOpacity={theme.activeOpacity}
          >
            {!isPasswordVisible ? (
              <Icon
                size={24}
                color="primaryCardBorderColor"
                name="visibility"
              />
            ) : (
              <Icon
                size={24}
                color="primaryCardBorderColor"
                name="visibility-off"
              />
            )}
          </TouchableOpacity>
        )}
      </FormInput.FieldBox>
      {error && <FormInput.Error>{error}</FormInput.Error>}
    </FormInput.Root>
  );
}
