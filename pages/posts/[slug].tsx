import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { postDirectoryPaths, POSTS_PATH } from "../../utils/mdxUtils";
import { Snippet } from "../../components/snippet";
import { IPost } from "../../interfaces";
import { ContentContainer } from "../../components/contentContainer";
import React from "react";
import { Card } from "../../components/card";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useIsDarkMode } from "../../utils/hooks";
import Image from "next/image";

export default function Post(props: IPost) {
  const {
    data: { hero, title, description, category },
    content,
  } = props;

  const isDark = useIsDarkMode();
  return (
    <ContentContainer>
      <Card display="flex" flexDirection="column" alignItems="center" pb={12}>
        <Box
          borderRadius="xl"
          minH={{ sm: "30vh", lg: "700px" }}
          maxH="70vh"
          width="100%"
          position="relative"
          overflow="hidden"
        >
          <Image
            src={hero}
            alt={`hero image for ${title}`}
            className="hero"
            layout="fill"
          />
        </Box>
        <Card
          w={{ base: "100%", md: "90%" }}
          mt={{ base: 0, md: -32 }}
          borderRadius="2xl"
          position="relative"
          p={{ base: 2, md: 12 }}
          shadow={{ base: "none", md: "xl" }}
        >
          <Box>
            {category && (
              <Flex
                width="fit-content"
                borderRadius="md"
                px={6}
                py={2}
                mb={4}
                background={"accent"}
                color="white"
                fontSize="xl"
                fontWeight="medium"
              >
                {category}
              </Flex>
            )}
            <Heading size="3xl" my={2}>
              {title}
            </Heading>
            {description && (
              <Box
                px={4}
                py={2}
                background={isDark ? "gray.700" : "gray.200"}
                borderRadius="lg"
                my={4}
              >
                <Text
                  fontSize={{ base: "xl" }}
                  lineHeight="tall"
                  color={isDark ? "gray.200" : "gray.800"}
                >
                  {description}
                </Text>
              </Box>
            )}
          </Box>
          <article className="mdx-post">
            <MDXRemote {...(content as any)} components={{ code: Snippet }} />
          </article>
        </Card>
      </Card>
    </ContentContainer>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}/index.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    scope: data,
  });

  return {
    props: {
      content: mdxSource,
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postDirectoryPaths.map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};
