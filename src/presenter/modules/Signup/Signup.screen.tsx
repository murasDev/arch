import { Box } from "@/presenter/components/atoms/Box.atom";
import { Text } from "@/presenter/components/atoms/Text.atom";
import { Button } from "@/presenter/components/composition/Button";
import React from "react";
import { ScrollView } from "react-native";
import useSignupViewModel from "./Signup.viewmodel";
import SignupForm from "./components/SignupForm/SignupForm.component";

export default function SignupScreen() {
  const { control, allFieldsFilled, loader, handleSignup, handleSubmit } =
    useSignupViewModel();

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <Box
        flex={1}
        backgroundColor="mainBackground"
        paddingHorizontal="l"
        paddingBottom="m"
        justifyContent="space-between"
      >
        <Box width="80%">
          <Text variant="h1">Cadastro</Text>
          <Text variant="body">
            Preencha os campos abaixo para se cadastrar no app
          </Text>
        </Box>
        <SignupForm control={control} />
        <Box gap="m" marginTop="s">
          <Button.Root
            isLoading={loader}
            isDisabled={!allFieldsFilled}
            onPress={handleSubmit((data) => handleSignup.mutate(data))}
          >
            <Button.Title>Avançar</Button.Title>
          </Button.Root>
        </Box>
      </Box>
    </ScrollView>
  );
}
