import { Box, BoxProps, useColorMode } from "@chakra-ui/react";
import React from "react";

export const ContentContainer = (props: BoxProps) => {
  return <Box p={4} px={{ base: 8, lg: 52 }} {...props} />;
};
