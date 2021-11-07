import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icons from "../../assets/icons";
import { IconWrapper } from "./styles";
import Head from "next/head";
import config from "../../site.config";
import {
  useColorMode,
  IconButton,
  Box,
  Link as ChakraLink,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, LinkIcon } from "@chakra-ui/icons";
import { useIsDarkMode } from "../../utils/hooks";

export default function Header() {
  const isDark = useIsDarkMode();

  return (
    <Box
      as="header"
      py={{ base: 4, lg: 6 }}
      px={{ base: 8, lg: 52 }}
      position="sticky"
      top="0"
      zIndex="10"
      background={"transparent"}
      backdropFilter="blur(5px)"
    >
      <Head>
        <title>{config.siteMetadata.title}</title>
        <meta name="description" content={config.siteMetadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box d="flex" justifyContent="space-between">
        <Link href="/">
          <ChakraLink cursor="pointer">
            <Image
              src={isDark ? "/logo-light.svg" : "/logo-dark.svg"}
              alt="Logo"
              width={32}
              height={32}
            />
          </ChakraLink>
        </Link>
        <Flex alignItems="center">
          <DarkModeToggle />
          <SharePageButton />
        </Flex>
      </Box>
    </Box>
  );
}

const DarkModeToggle: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: "black",
    dark: "white",
  };
  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      color={iconColor[colorMode]}
      variant="ghost"
      mx={4}
    />
  );
};

const copyToClipboard = async (text: string) => {
  await window.navigator.clipboard.writeText(text);
};

const SharePageButton: React.FC<{}> = () => {
  const [hasCopied, setHasCopied] = React.useState<boolean>(false);
  const { colorMode } = useColorMode();
  const toast = useToast();
  const iconColor = {
    light: "black",
    dark: "white",
  };

  function copyToClipboardOnClick() {
    if (hasCopied) return;

    copyToClipboard(window.location.href);
    toast({
      title: "Copied URL to clipboard",
      status: "info",
      duration: 3000,
      position: "top",
    });
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 1000);
  }

  return (
    <IconButton
      icon={<LinkIcon />}
      onClick={copyToClipboardOnClick}
      data-a11y="false"
      aria-label="Copy URL to clipboard"
      title="Copy URL to clipboard"
      color={iconColor[colorMode]}
      variant="ghost"
    />
  );
};
