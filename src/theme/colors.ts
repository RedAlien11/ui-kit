import { Colors } from "./types";

export const baseColors = {
  failure: "#ff1744",
  primary: "#D32F2F",
  primaryBright: "#E57373",
  primaryDark: "#B71C1C",
  secondary: "#E53935",
  success: "#EF9A9A",
  warning: "#D50000",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  inputSecondary: "#d7caec",
  text: "#5a5a5a",
  textDisabled: "#BDC2C4",
  textSubtle: "#676767",
  borderColor: "#E9EAEB",
  card: "#fffaf0",
  gradients: {
    bubblegum: "linear-gradient(139.73deg,#f7e9cf 0%,#b7b7b7 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",

  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#E91E63",
  background: "#343135",
  backgroundAlt: "#27262c",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  inputSecondary: "#262130",
  tertiary: "#353547",
  text: "#fcf2e2",
  textDisabled: "#666171",
  textSubtle: "#d4d1c4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg,#f48fb1 0%,#ad1457 100%)",
    cardHeader: "linear-gradient(166.77deg, #f48fb1 0%, #ad1457 100%)",
  },
};
