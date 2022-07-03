import { readable } from "svelte/store";
import { getMonthName } from './scripts/utils';

function getAllPosts() {
  const allPostFiles = import.meta.globEager('./content/*.md');

  const allPosts = {};
  Object.entries(allPostFiles).forEach(([path, post]) => {
    const fileName = path
      .replace("./content/", "")
      .replace(".md", "");

    const metadata = {...post.metadata};
    metadata.date = new Date(post.metadata.date)
    metadata.creationMonth = getMonthName(metadata.date);
    metadata.creationDay = metadata.date.getDay() + 1;
    metadata.creationYear = metadata.date.getFullYear();
    metadata.tags = metadata.tags || [];

    allPosts[fileName] = {
      ...metadata,
      default: post.default,
      fileName
    }
  });
  return allPosts
}

export const allPosts = readable(getAllPosts());
export const pageTitle = readable('@devStuff')