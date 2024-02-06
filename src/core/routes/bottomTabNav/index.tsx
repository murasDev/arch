import useAppTheme from "@/presenter/hooks/useAppTheme";
import CartModuleRoutes from "@/presenter/modules/Cart/routes";
import HomeModuleRoutes from "@/presenter/modules/Home/routes";
import Settings from "@/presenter/modules/Settings/Settings.screen";
import { MaterialIcons } from "@expo/vector-icons/";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

type BottomTabNavTypes = {
  Home: undefined;
  Cart: undefined;
  Settings: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<BottomTabNavTypes>();

export default function BottomTabNav() {
  const theme = useAppTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.mainForeground,
        tabBarStyle: {
          paddingBottom: 4,
          backgroundColor: theme.colors.primaryCardBackground,
        },
      }}
    >
      <Screen
        name="Home"
        component={HomeModuleRoutes}
        options={{
          tabBarIcon: (props) => (
            <MaterialIcons color={props.color} size={props.size} name="home" />
          ),
        }}
      />
      <Screen
        name="Cart"
        component={CartModuleRoutes}
        options={{
          tabBarIcon: (props) => (
            <MaterialIcons
              color={props.color}
              size={props.size}
              name="shopping-cart"
            />
          ),
        }}
      />
      <Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: (props) => (
            <MaterialIcons
              color={props.color}
              size={props.size}
              name="settings"
            />
          ),
        }}
      />
    </Navigator>
  );
}
