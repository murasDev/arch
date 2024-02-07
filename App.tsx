import Routes from "@/core/routes/index.routes";
import { Box } from "@/presenter/components/atoms/Box.atom";
import { createAppTheme, darkTheme } from "@/presenter/theme";
import { ThemeConfigResponse } from "@/presenter/theme/types";
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import remoteConfig from "@react-native-firebase/remote-config";
import { ThemeProvider } from "@shopify/restyle";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_300Light,
    Poppins_600SemiBold,
  });
  const [appIsReady, setAppIsReady] = useState(false);

  const queryClient = new QueryClient();

  async function getConfigurations() {
    try {
      await enableRemoteConfig();
      const parameters = remoteConfig().getAll();
      console.log("Parameters: ", parameters);
      Object.entries(parameters).forEach(($) => {
        const [key, entry] = $;
        if (key === "theme") {
          const theme = JSON.parse(entry.asString()) as ThemeConfigResponse;
          console.log("THEMEEE======>>>>", theme);
          createAppTheme(theme);
        }
        // console.log("Key: ", key);
        // console.log("Source: ", entry.getSource());
        // console.log("Value: ", JSON.parse(entry.asString()));
      });
    } catch (error) {
      console.log(":::: configurations ERROR", error);
    } finally {
      console.log("CAIUUUUU AQUIIII");
      setAppIsReady(true);
    }
  }

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  async function enableRemoteConfig() {
    try {
      await remoteConfig().fetch(0);
      await remoteConfig()
        .setDefaults({})
        .then(() => remoteConfig().fetchAndActivate())
        .then((fetchedRemotely) => {
          if (fetchedRemotely) {
            console.log("::: remote config success data retrieved");
          } else {
            console.log(":::: remote config failed no data retrieved");
          }
        });
    } catch (error) {
      console.log(":::: remote config error", error);
    }
  }

  useEffect(() => {
    getConfigurations();
  }, []);

  if (!fontsLoaded || !appIsReady) {
    return (
      <Box flex={1} alignItems="center" justifyContent="center">
        <ActivityIndicator size="large" />
      </Box>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <StatusBar
          backgroundColor="transparent"
          translucent
          style={"inverted"}
        />
        <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1 }}>
          <Routes />
        </SafeAreaView>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
