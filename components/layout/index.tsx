import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../header";
import Footer from "../footer";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <Box as="main">
      <Header />
      {children}
      <Footer />
    </Box>
  );
}
