import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import markdownToHtml from './markDownToHtml';

const postsDirectory = path.join(process.cwd(), '_posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    console.log({ matterResult });

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
      content: matterResult.content,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  console.log({ realSlug, postsDirectory });
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const data = await markdownToHtml(fileContents);
  // Ensure only the minimal needed data is exposed
  //   fields.forEach((field) => {
  //     if (field === 'slug') {
  //       items[field] = realSlug;
  //     }
  //     if (field === 'content') {
  //       items[field] = content;
  //     }

  //     if (typeof data[field] !== 'undefined') {
  //       items[field] = data[field];
  //     }
  //   });
  return data;
}

export async function getAllPosts() {
  const slugs = getPostSlugs();
  console.log({ slugs });
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  console.log({ posts });
  return posts;
}
