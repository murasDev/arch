import Routes from "@/core/routes/index.routes";
import { useThemeStore } from "@/core/store/ThemeStore";
import { Box } from "@/presenter/components/atoms/Box.atom";
import { darkTheme } from "@/presenter/theme";
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import remoteConfig from "@react-native-firebase/remote-config";
import { ThemeProvider } from "@shopify/restyle";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  const theme = useThemeStore((state) => state.theme);
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_300Light,
    Poppins_600SemiBold,
  });
  const queryClient = new QueryClient();

  async function getConfigurations() {
    await enableRemoteConfig();
    const parameters = remoteConfig().getAll();
    console.log("Parameters: ", parameters);
    Object.entries(parameters).forEach(($) => {
      console.log("Entry: ", $);
      const [key, entry] = $;
      console.log("Key: ", key);
      console.log("Source: ", entry.getSource());
      console.log("Value: ", JSON.parse(entry.asString()));
    });

    console.log(parameters);
  }

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

  if (!fontsLoaded) {
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
          style={theme === "light" ? "dark" : "light"}
        />
        <SafeAreaView style={{ flex: 1 }}>
          <Routes />
        </SafeAreaView>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
