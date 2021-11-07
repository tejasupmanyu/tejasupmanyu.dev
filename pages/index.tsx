import React from "react";
import config from "../site.config";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import icons from "../assets/icons";
import { featuredPostsPaths, POSTS_PATH } from "../utils/mdxUtils";
import { IPost, ITalk } from "../interfaces";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { IconWrapper } from "../styles/commons";
import { Card } from "../components/card";
import Link from "next/link";
import Image from "next/image";
import { ContentContainer } from "../components/contentContainer";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useIsDarkMode, useSubtextColor } from "../utils/hooks";

interface PostListing extends IPost {
  dirPath: string;
}

interface PostProps extends PostListing {
  index: number;
}

interface SocialLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

interface HomeProps {
  featuredPosts: PostListing[];
  featuredTalks: ITalk[];
}

const { twitter, instagram, linkedin, github, facebook } =
  config.siteMetadata.social;

const socialHandles = [
  { label: twitter.name, href: twitter.url, icon: icons.Twitter },
  { label: instagram.name, href: instagram.url, icon: icons.Instagram },
  { label: facebook.name, href: facebook.url, icon: icons.Facebook },
  { label: linkedin.name, href: linkedin.url, icon: icons.LinkedIn },
  { label: github.name, href: github.url, icon: icons.Github },
];

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const { featuredPosts, featuredTalks } = props;
  const isDark = useIsDarkMode();
  const { fullName, avatar } = config.siteMetadata.author;
  const subTextColor = useSubtextColor();

  return (
    <ContentContainer>
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent={"space-between"}
      >
        <Card
          d="flex"
          flexDirection={{ base: "column", lg: "row" }}
          flex={1}
          mr={{ lg: 4 }}
          alignItems={{ base: "center", lg: "start" }}
        >
          <Box
            minHeight={{ base: 44, lg: 64 }}
            height={{ lg: "100%" }}
            width={{ base: "44", lg: "25%" }}
            position="relative"
            borderRadius={{ base: "100%", lg: "xl" }}
            overflow="hidden"
          >
            <Image src={avatar} alt="avatar" layout="fill" />
          </Box>
          <Box ml={{ lg: 4 }} mt={{ base: 2, lg: 0 }} width={{ lg: "70%" }}>
            <Flex
              flexDirection={{ base: "column", lg: "row" }}
              wrap="wrap"
              alignItems={{ base: "center", lg: "start" }}
            >
              <Text display="flex" fontSize={{ base: "2xl", md: "5xl" }} mr={2}>
                Hello 👋 I am
              </Text>
              <Text
                display="flex"
                fontSize={{ base: "4xl", md: "5xl" }}
                fontWeight="bold"
                textAlign={{ base: "center", lg: "left" }}
              >
                {fullName}
              </Text>
            </Flex>
            <Text
              fontSize={{ base: "lg", md: "2xl" }}
              textAlign={{ base: "center", lg: "left" }}
            >
              Engineering Web{" "}
              <ChakraLink
                href="https://twitter.com/DisneyPlusHS"
                isExternal
                color="accent"
                textDecoration="none !important"
              >
                @DisneyPlusHS
              </ChakraLink>
              , Previously{" "}
              <ChakraLink
                href="https://twitter.com/hashedin"
                isExternal
                color="accent"
                textDecoration="none !important"
              >
                @HashedIn
              </ChakraLink>
              .
            </Text>
            <Text
              mt={{ base: 4, lg: 4 }}
              fontSize={{ base: "xl", md: "xl" }}
              lineHeight="tall"
              fontWeight="medium"
              textAlign={{ base: "center", lg: "left" }}
              color={subTextColor}
            >
              and I'm a Software engineer who loves building stellar user
              experiences. Here to share my learnings, experiences and opinions
              on javascript, life and everything in between.
            </Text>
          </Box>
        </Card>
        <Card
          d="flex"
          w={{ base: "100%", lg: "20%" }}
          maxW={{ lg: "250px" }}
          my={{ base: 4, lg: 0 }}
        >
          <Flex
            flexDirection={{ base: "row", lg: "column" }}
            justifyContent="space-around"
            w="100%"
          >
            {socialHandles.map((handle) => (
              <SocialLink {...handle} key={handle.label}>
                <IconWrapper>
                  <handle.icon fill={isDark ? "#fff" : "#4a5568"} />
                </IconWrapper>
              </SocialLink>
            ))}
          </Flex>
        </Card>
      </Flex>
      <Box my={4}>
        <Heading size="xl" my={4}>
          Featured Posts
        </Heading>
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", lg: "row" }}
          alignItems={{ base: "center", lg: "stretch" }}
        >
          {featuredPosts.map((post: PostListing, index: number) => (
            <Post {...post} index={index} key={post.dirPath} />
          ))}
          <Link href={`/posts/`}>
            <Button
              px={3}
              py={6}
              bgColor={isDark ? "gray.700" : "white"}
              shadow={isDark ? "none" : "xl"}
              borderRadius="full"
              alignSelf="center"
              rightIcon={<ArrowForwardIcon />}
              _hover={{
                bgColor: "accent",
                color: "white",
              }}
            >
              All Posts
            </Button>
          </Link>
        </Flex>
      </Box>
    </ContentContainer>
  );
};

function SocialLink(props: SocialLinkProps) {
  const { href, label, children } = props;
  return (
    <a href={href} target="_blank">
      <Flex alignItems="center">
        {children}
        <Text
          display={{ base: "none", lg: "block" }}
          ml={6}
          textTransform="capitalize"
          fontWeight="medium"
        >
          {label}
        </Text>
      </Flex>
    </a>
  );
}

function Post(props: PostProps) {
  const {
    data: { hero, description, title, date },
    dirPath,
  } = props;

  const subTextColor = useSubtextColor();

  return (
    <Link href={`/posts/${dirPath}`} passHref>
      <ChakraLink
        w={{ base: "100%", lg: "30%" }}
        my={{ base: 2, lg: 0 }}
        textDecoration="none !important"
      >
        <Card
          hoverable
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Box
            position="relative"
            height={{ sm: "30vh", lg: "270px" }}
            width="100%"
            borderRadius="xl"
            overflow="hidden"
          >
            <Image src={hero} layout="fill" alt={`hero image for ${title}`} />
          </Box>
          <Heading size="lg" my={2}>
            {title}
          </Heading>
          <Text color={subTextColor} fontWeight="medium">
            {new Intl.DateTimeFormat("en-GB", {
              dateStyle: "long",
            }).format(new Date(date))}
          </Text>
          <Text>{description}</Text>
        </Card>
      </ChakraLink>
    </Link>
  );
}

export function getStaticProps() {
  const { featuredTalks } = config.siteMetadata;
  const featuredPosts = featuredPostsPaths.map((dirPath) => {
    const filePath = path.join(POSTS_PATH, dirPath, "index.mdx");
    const source = fs.readFileSync(filePath);
    const { data } = matter(source);
    return {
      data,
      dirPath,
    };
  });

  return { props: { featuredPosts, featuredTalks } };
}

export default Home;
