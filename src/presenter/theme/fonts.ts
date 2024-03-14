import { moderateScale } from "react-native-size-matters";

export const fonts = {
  regular: "Poppins_400Regular",
  semiBold: "Poppins_600SemiBold",
  bold: "Poppins_700Bold",
  light: "Poppins_300Light",
};

/**
 * @property {xs} = 8
 * @property {s} = 12
 * @property {m} = 14
 * @property {l} = 16
 * @property {xl} = 20
 * @property {xxl} = 24
 * @property {xxxl} = 28
 * @property {xxxxl} = 36
 */
export const fontSizes = {
  xs: moderateScale(8),
  s: moderateScale(12),
  m: moderateScale(14),
  l: moderateScale(16),
  xl: moderateScale(20),
  xxl: moderateScale(24),
  xxxl: moderateScale(28),
  xxxxl: moderateScale(36),
};
