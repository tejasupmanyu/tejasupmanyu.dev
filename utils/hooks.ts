import { useColorMode } from "@chakra-ui/react";

export const useIsDarkMode = () => {
  const { colorMode } = useColorMode();
  return colorMode === "dark";
};

export const useSubtextColor = () => {
  const isDark = useIsDarkMode();
  return isDark ? "subTextDark" : "subTextLight";
};
