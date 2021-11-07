import { Box, BoxProps, useColorMode } from "@chakra-ui/react";
import React from "react";

interface CardProps extends BoxProps {
  hoverable?: boolean;
}

export const Card = React.forwardRef(
  (props: CardProps, ref: React.LegacyRef<HTMLDivElement>) => {
    const { colorMode } = useColorMode();
    const { hoverable, ...rest } = props;
    const isDark = colorMode === "dark";
    return (
      <Box
        p={4}
        ref={ref}
        borderRadius={"xl"}
        bgColor={isDark ? "gray.800" : "white"}
        shadow={isDark ? "none" : "xl"}
        _hover={
          hoverable && {
            shadow: "2xl",
            transform: "scale(1.01)",
            transition: "all 0.2s ease-in-out",
          }
        }
        {...rest}
      />
    );
  }
);
