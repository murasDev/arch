import { Box } from "@/presenter/components/atoms/Box.atom";

import { Text } from "@/presenter/components/atoms/Text.atom";
import TextButton from "@/presenter/components/atoms/TextButton.atom";
import { Button } from "@/presenter/components/composition/Button";
import React from "react";
import { ScrollView } from "react-native";
import useSignInViewModel from "./SignIn.viewmodel";
import SigninForm from "./components/SigninForm/SigninForm.component";

export default function SignInScreen() {
  const {
    control,
    allFieldsFilled,
    handleSignIn,
    loader,
    handleSubmit,
    navigateToSignupScreen,
  } = useSignInViewModel();

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <Box flex={1} paddingHorizontal="m" justifyContent="space-around">
        <Box width="80%">
          <Text variant="h1">Login</Text>
          <Text variant="body">
            Entre com email e senha para aproveitar os melhores preços de
            bebidas
          </Text>
        </Box>
        <Box gap="m">
          <SigninForm control={control} />
          <Box flexDirection="row" justifyContent="flex-end">
            <TextButton title="Esqueci a senha" onPress={() => {}} />
          </Box>
        </Box>
        <Box gap="m" marginTop="s">
          <Button.Root
            isLoading={loader}
            isDisabled={!allFieldsFilled}
            onPress={handleSubmit((data) => handleSignIn.mutate(data))}
          >
            <Button.Title>Entrar</Button.Title>
          </Button.Root>
          <Button.Root onPress={navigateToSignupScreen} variant="outlined">
            <Button.Title>Cadastrar-se</Button.Title>
          </Button.Root>
        </Box>
      </Box>
    </ScrollView>
  );
}
