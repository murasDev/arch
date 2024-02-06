import SignInScreen from "@/presenter/modules/Signin/SignIn.screen";
import SignupScreen from "@/presenter/modules/Signup/Signup.screen";
import { Theme } from "@/presenter/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@shopify/restyle";

export type NonAuthRouteType = {
  Signup: undefined;
  SignIn: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<NonAuthRouteType>();

export default function NonAuthRoutes() {
  const theme = useTheme<Theme>();
  return (
    <Navigator
      initialRouteName="SignIn"
      screenOptions={{
        contentStyle: {
          backgroundColor: theme.colors.mainBackground,
        },
        headerTitle: "",
        headerTintColor: "white",
        animation: "slide_from_right",
        headerStyle: {
          backgroundColor: theme.colors.mainBackground,
        },
      }}
    >
      <Screen name="Signup" component={SignupScreen} />
      <Screen name="SignIn" component={SignInScreen} />
    </Navigator>
  );
}
