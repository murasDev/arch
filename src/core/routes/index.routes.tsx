import useAppTheme from "@/presenter/hooks/useAppTheme";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import BottomTabNav from "./bottomTabNav";
import NonAuthRoutes from "./nonAuth";

export default function Routes() {
  const theme = useAppTheme();
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  // Handle user state changes
  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((data) =>
      onAuthStateChanged(data),
    );
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <BottomTabNav /> : <NonAuthRoutes />}
    </NavigationContainer>
  );
}
