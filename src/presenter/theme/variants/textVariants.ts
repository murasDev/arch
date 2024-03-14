import { fontSizes, fonts } from "../fonts";

export const textVariants = {
  defaults: {
    color: "mainForeground",
    fontFamily: fonts.regular,
    fontSize: fontSizes.m,
  },
  h1: {
    fontSize: fontSizes.xxxl,
    fontFamily: fonts.bold,
    color: "white",
  },
  h2: {
    fontSize: fontSizes.xxxl,
    fontFamily: fonts.semiBold,
    color: "white",
  },
  subTitle: {
    fontSize: fontSizes.xl,
    fontFamily: fonts.semiBold,
    color: "primaryCardBorderColor",
  },
  label: {
    color: "primaryCardBorderColor",
    fontFamily: fonts.bold,
    fontSize: fontSizes.m,
  },
  body: {
    fontSize: fontSizes.m,
    fontFamily: fonts.regular,
    color: "primaryCardBorderColor",
  },
  title: {
    fontSize: fontSizes.xxxl,
    letterSpacing: -1,
    fontFamily: fonts.regular,
  },
  primaryColorCardText: {
    fontSize: fontSizes.m,
    fontFamily: fonts.regular,
    color: "primaryCardText",
  },
  buttonTitle: {
    fontSize: fontSizes.m,
    fontFamily: fonts.bold,
    color: "primaryCardText",
  },
  smallButtonTitle: {
    fontSize: fontSizes.s,
    fontFamily: fonts.bold,
    color: "primaryCardText",
  },
};
