import { useTheme } from "@shopify/restyle";
import { AppTheme } from "../theme";

const useAppTheme = () => useTheme<AppTheme>();

export default useAppTheme;
