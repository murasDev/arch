import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemDetails from "../ItemDetails/ItemDetails.screen";

export type DetailsRoutesType = {
  ItemDetails: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<DetailsRoutesType>();

export default function DetailsModuleRoutes() {
  return (
    <Navigator
      initialRouteName="ItemDetails"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="ItemDetails" component={ItemDetails} />
    </Navigator>
  );
}
