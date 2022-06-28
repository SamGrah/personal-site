import { readable } from "svelte/store";

function getAllPosts() {
  const allPostFiles = import.meta.globEager('./content/*.md');

  const allPosts = {};
  Object.entries(allPostFiles).forEach(([path, post]) => {
    const fileName = path
      .replace("./content/", "")
      .replace(".md", "");
    allPosts[fileName] = { 
      ...post.metadata, 
      default: post.default,
      fileName 
    }
  });
  return allPosts
}

export const allPosts = readable(getAllPosts());