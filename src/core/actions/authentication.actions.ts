import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useAuthStore } from "../store/AuthStore";

export async function loginWithEmailAndPassword(
  auth: FirebaseAuthTypes.Module,
  email: string,
  password: string,
) {
  try{
    const authState = useAuthStore.getState();
  const user = await auth.signInWithEmailAndPassword(email, password);

  authState.setUser({ email: user.user.email!, id: user.user.uid });
  } catch(error){
    console.log("ERROR", error);
  }
}
