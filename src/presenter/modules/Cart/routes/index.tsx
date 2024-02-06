import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsModuleRoutes from "../../Details/routes";
import CartList from "../CartList/CartList.screen";

export type CartRoutesType = {
  CartList: undefined;
  CartItemDetails: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<CartRoutesType>();

export default function CartModuleRoutes() {
  return (
    <Navigator
      initialRouteName="CartList"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="CartList" component={CartList} />
      <Screen name="CartItemDetails" component={DetailsModuleRoutes} />
    </Navigator>
  );
}
