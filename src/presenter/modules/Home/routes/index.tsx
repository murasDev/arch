import useAppTheme from "@/presenter/hooks/useAppTheme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemDetails from "../../Details/ItemDetails/ItemDetails.screen";
import AvailableItemsList from "../AvailableItemsList/AvailableItemsList.screen";

export type HomeRouteTypes = {
  AvailableItems: undefined;
  AvailableItemsDetails: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<HomeRouteTypes>();

export default function HomeModuleRoutes() {
  const theme = useAppTheme();

  return (
    <Navigator
      initialRouteName="AvailableItems"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        contentStyle: { backgroundColor: theme.colors.mainBackground },
      }}
    >
      <Screen name="AvailableItems" component={AvailableItemsList} />
      <Screen
        name="AvailableItemsDetails"
        options={{ presentation: "modal" }}
        component={ItemDetails}
      />
    </Navigator>
  );
}
