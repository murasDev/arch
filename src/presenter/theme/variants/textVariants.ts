import { fonts } from "../fonts";
import { TextVariantsType } from "../types";

export const textVariants: TextVariantsType = {
  defaults: {
    color: "mainForeground",
    fontFamily: fonts.regular,
  },
  h1: {
    fontSize: 36,
    fontFamily: fonts.bold,
    color: "white",
  },
  h2: {
    fontSize: 30,
    fontFamily: fonts.semiBold,
    color: "white",
  },
  subTitle: {
    fontSize: 20,
    fontFamily: fonts.semiBold,
    color: "primaryCardBorderColor",
  },
  label: {
    color: "primaryCardBorderColor",
    fontFamily: fonts.bold,
  },
  body: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: "primaryCardBorderColor",
  },
  title: {
    fontSize: 28,
    letterSpacing: -1,
    fontFamily: fonts.regular,
  },
  primaryColorCardText: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: "primaryCardText",
  },
  buttonTitle: {
    fontSize: 14,
    fontFamily: fonts.bold,
    color: "primaryCardText",
  },
  smallButtonTitle: {
    fontSize: 12,
    fontFamily: fonts.bold,
    color: "primaryCardText",
  },
};
