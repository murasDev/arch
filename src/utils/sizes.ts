import { scale, verticalScale } from "react-native-size-matters";

export function getScaledSize(size: number): number {
  return scale(size);
}

export function getVerticalScale(size: number): number {
  return verticalScale(size);
}
