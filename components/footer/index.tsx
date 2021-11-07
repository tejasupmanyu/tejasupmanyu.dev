import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icons from "../../assets/icons";
import Head from "next/head";
import config from "../../site.config";
import {
  useColorMode,
  IconButton,
  Box,
  Link as ChakraLink,
  Flex,
  useToast,
  Text,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, LinkIcon } from "@chakra-ui/icons";
import { useIsDarkMode, useSubtextColor } from "../../utils/hooks";

export default function Footer() {
  const isDark = useIsDarkMode();
  const subTextColor = useSubtextColor();

  return (
    <Box
      as="footer"
      py={{ base: 4, lg: 6 }}
      px={{ base: 8, lg: 52 }}
      position="relative"
      bottom="0"
      zIndex="10"
    >
      <Flex justifyContent="space-between">
        <Text color={subTextColor} textAlign="center">
          © {new Date().getFullYear()} Tejas Upmanyu
        </Text>
        <Image
          src={isDark ? "/logo-light.svg" : "/logo-dark.svg"}
          alt="Logo"
          width={24}
          height={24}
        />
      </Flex>
    </Box>
  );
}
