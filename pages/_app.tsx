import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import { theme } from "../styles/theme";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = React.useState(false);

  /* 
    why this? to keep ssr and csr on the same plane.
    If some components are server side rendered value for darkMode will be false.
    Now while darkMode is true on client, some components (ssr) will be shown in light theme.
    To prevent this, don't render until the component mounts on client, so that it has
    access to the latest value.
  */
  React.useEffect(() => setIsMounted(true), []);

  React.useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "https://platform.twitter.com/widgets.js");
    s.setAttribute("async", "true");
    document.head.appendChild(s);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        />
      </Head>
      {isMounted && (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ChakraProvider>
  );
}

export default App;
