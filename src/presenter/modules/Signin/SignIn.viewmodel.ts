import { useAuthStore } from "@/core/store/AuthStore";
import { UserModel } from "@/domain/models/user.model";
import { zodResolver } from "@hookform/resolvers/zod";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { SignupNavigationProp } from "./SignIn.model";
import {
  SignInFormSchema,
  signInFormSchema,
} from "./components/SigninForm/signin.schema";

export default function useSignInViewModel() {
  const [allFieldsFilled, setAllFieldsFilled] = React.useState(false);
  const navigation = useNavigation<SignupNavigationProp>();
  const [loader, setLoader] = React.useState(false);
  const setUser = useAuthStore((state) => state.setUser);

  const { control, handleSubmit, watch } = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
  });

  function navigateToSignupScreen() {
    navigation.navigate("Signup");
  }

  async function onSubmit(data: SignInFormSchema) {
    console.log("DATA: ", data);
    setLoader(true);
    return await auth().signInWithEmailAndPassword(data.email, data.password);
  }

  const handleSignIn = useMutation({
    mutationKey: "signin",
    mutationFn: onSubmit,
    onError: (error) => {
      setLoader(false);
      console.log("ERROR", error);
    },
    onSuccess: (data) => {
      setLoader(false);
      console.log("DATA: ", data);
      const userLogged: UserModel = {
        email: data.user.email!,
        id: data.user.uid,
      };
      setUser(userLogged);
    },
  });

  React.useEffect(() => {
    const subscription = watch((value) => {
      const { email, password } = value;
      setAllFieldsFilled(!!email && !!password);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return {
    control,
    allFieldsFilled,
    handleSignIn,
    loader,
    handleSubmit,
    navigateToSignupScreen,
  };
}
