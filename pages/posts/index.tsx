import React from "react";
import Head from "next/head";
import Image from "next/image";
import config from "../../site.config";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import icons from "../../assets/icons";
import { LinkIcon } from "@chakra-ui/icons";
import { postDirectoryPaths, POSTS_PATH } from "../../utils/mdxUtils";
import { IPost } from "../../interfaces";
import Link from "next/link";
import {
  Box,
  Button,
  Flex,
  Heading,
  useColorMode,
  Text,
  VStack,
  Grid,
  FlexProps,
} from "@chakra-ui/react";
import { ContentContainer } from "../../components/contentContainer";
import { Card } from "../../components/card";
import { useIsDarkMode, useSubtextColor } from "../../utils/hooks";

interface PostListing extends IPost {
  dirPath: string;
}

interface PostTileProps extends IPost {
  dirPath: string;
}

interface PostBottomBarProps extends FlexProps {
  date: string;
}

export default function Posts({ posts }) {
  const isDark = useIsDarkMode();
  const fill = isDark ? "#fff" : "#000";

  const [listView, setListView] = React.useState(true);

  /**
   * We're taking the flat array of articles [{}, {}, {}...]
   * and turning it into an array of pairs of articles [[{}, {}], [{}, {}], [{}, {}]...]
   * This makes it simpler to create the grid we want
   */
  const postPairs = posts.reduce((result, value, index, array) => {
    if (index % 2 === 0) {
      result.push(array.slice(index, index + 2));
    }
    return result;
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>{config.siteMetadata.title}</title>
      </Head>
      <ContentContainer>
        <Flex
          my={4}
          justifyContent="flex-end"
          display={{ base: "none", md: "flex" }}
        >
          <Button variant="ghost" onClick={() => setListView(false)} mx={1}>
            <icons.Tiles fill={fill} opacity={listView ? 0.5 : 1} />
          </Button>
          <Button variant="ghost" onClick={() => setListView(true)}>
            <icons.Rows fill={fill} opacity={listView ? 1 : 0.5} />
          </Button>
        </Flex>
        <VStack spacing="5">
          {listView
            ? posts.map((post: PostListing) => (
                <PostListItem {...post} key={post.dirPath} />
              ))
            : postPairs.map((pair: PostListing[], index: number) => (
                <Grid
                  index={index}
                  key={index}
                  templateColumns={`${
                    index % 2 === 0 ? `1fr 400px` : `400px 1fr`
                  }`}
                  columnGap="5"
                  width="100%"
                >
                  <PostTile {...pair[0]} />
                  {pair[1] && <PostTile {...pair[1]} />}
                </Grid>
              ))}
        </VStack>
      </ContentContainer>
    </React.Fragment>
  );
}

function PostListItem(props: PostTileProps) {
  const {
    data: { hero, description, title, date },
    dirPath,
  } = props;

  const subTextColor = useSubtextColor();

  return (
    <Link href={`/posts/${dirPath}`} passHref>
      <Card hoverable w="100%" minH="64" display="flex">
        <Flex
          width="100%"
          minH="100%"
          direction={{ base: "column", md: "row" }}
        >
          <Box
            width={{ base: "100%", md: "30%" }}
            overflow="hidden"
            position="relative"
            borderRadius="lg"
          >
            <Image src={hero} alt={`hero image for ${title}`} layout="fill" />
          </Box>
          <Box
            className="info"
            mx={{ base: 0, md: 4 }}
            position="relative"
            flex={1}
          >
            <Heading size="xl">{title}</Heading>
            <PostBottomBar date={date} />
            <Text
              fontSize={{ base: "md", md: "xl" }}
              my={4}
              color={subTextColor}
            >
              {description}
            </Text>
          </Box>
        </Flex>
      </Card>
    </Link>
  );
}

function PostTile(props: PostTileProps) {
  const {
    data: { hero, description, title, date },
    dirPath,
  } = props;

  const subTextColor = useSubtextColor();

  return (
    <Link href={`/posts/${dirPath}`} passHref>
      <Card hoverable>
        <Box position="relative" height="100%">
          <Box
            width={{ base: "100%", md: "30%" }}
            overflow="hidden"
            position="relative"
            borderRadius="lg"
            height="270px"
            mb={2}
            minW="100%"
          >
            <Image src={hero} alt={`hero image for ${title}`} layout="fill" />
          </Box>
          <Heading size="md">{title}</Heading>
          <PostBottomBar date={date} pos="relative" />
          <Text color={subTextColor}>{description}</Text>
        </Box>
      </Card>
    </Link>
  );
}

function PostBottomBar(props: PostBottomBarProps) {
  const { date, ...rest } = props;
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const subTextColor = useSubtextColor();
  return (
    <Flex
      pt={2}
      width="100%"
      justify="space-between"
      alignItems="center"
      {...rest}
    >
      <Text color={subTextColor} fontWeight="medium">
        {new Intl.DateTimeFormat("en-GB", {
          dateStyle: "long",
        }).format(new Date(date))}
      </Text>
      <Button variant="ghost" p={1}>
        <LinkIcon color={isDark ? "#fff" : "#4a5568"} />
      </Button>
    </Flex>
  );
}

export function getStaticProps() {
  const posts = postDirectoryPaths.map((dirPath) => {
    const filePath = path.join(POSTS_PATH, dirPath, "index.mdx");
    const source = fs.readFileSync(filePath);
    const { data } = matter(source);

    return {
      data,
      dirPath,
    };
  });

  return { props: { posts } };
}
