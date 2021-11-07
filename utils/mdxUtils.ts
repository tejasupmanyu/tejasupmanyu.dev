import fs from "fs";
import path from "path";
import config from "../site.config";

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), "content", "posts");

// postFilePaths is the list of all directories inside the POSTS_PATH directory
export const postDirectoryPaths = fs
  .readdirSync(POSTS_PATH)
  .filter((dir) => dir !== ".DS_Store");

export const featuredPostsPaths = postDirectoryPaths.filter((dir) =>
  config.siteMetadata.featuredPosts.includes(dir)
);
