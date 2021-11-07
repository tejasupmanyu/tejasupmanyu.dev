import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import darkTheme from "prism-react-renderer/themes/nightOwl";
import lightTheme from "prism-react-renderer/themes/github";

import { Flex, Text, Box } from "@chakra-ui/layout";
import { useIsDarkMode } from "../../utils/hooks";

export const Snippet = ({ children, className }) => {
  const language = className && className.replace(/language-/, "");
  const isDark = useIsDarkMode();

  return (
    <Flex direction="column" borderRadius="md" overflow="hidden">
      {language && (
        <Box
          alignSelf="flex-end"
          background={isDark ? "gray.600" : "gray.200"}
          px={2}
          py={1}
          borderTopRadius="md"
        >
          <Text
            as="span"
            fontSize="sm"
            fontWeight="bold"
            fontFamily="body"
            textTransform="uppercase"
          >
            {language}
          </Text>
        </Box>
      )}
      <Highlight
        {...defaultProps}
        theme={isDark ? darkTheme : lightTheme}
        code={children.trim()}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, padding: "20px" }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Flex>
  );
};
