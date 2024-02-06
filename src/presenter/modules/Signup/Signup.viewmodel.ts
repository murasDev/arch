import { zodResolver } from "@hookform/resolvers/zod";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import {
  SignupFormSchema,
  SignupNavigationProp,
  signupFormSchema,
} from "./Signup.model";

export default function useSignupViewModel() {
  const [allFieldsFilled, setAllFieldsFilled] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const navigation = useNavigation<SignupNavigationProp>();

  const { control, handleSubmit, watch } = useForm<SignupFormSchema>({
    resolver: zodResolver(signupFormSchema),
  });

  async function onSubmit(data: SignupFormSchema) {
    setLoader(true);
    return await auth().createUserWithEmailAndPassword(
      data.email,
      data.password,
    );
  }

  const handleSignup = useMutation({
    mutationKey: "signup",
    mutationFn: onSubmit,
    onError: (error) => {
      setLoader(false);
      console.log("ERROR", error);
    },
    onSuccess: (data) => {
      console.log("DATA: ", data);
      setLoader(false);
      navigation.goBack();
    },
  });

  React.useEffect(() => {
    const subscription = watch((value) => {
      const { email, password, confirmPassword } = value;
      setAllFieldsFilled(!!email && !!password && !!confirmPassword);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return {
    control,
    allFieldsFilled,
    loader,
    handleSignup,
    handleSubmit,
  };
}
