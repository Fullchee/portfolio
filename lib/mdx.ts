import fs from "fs";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
import { MdxRemote } from "next-mdx-remote/types";
import path from "path";
import readingTime from "reading-time";

interface IPostFrontMatterBase {
  title: string;
  date: string;
  summary: string;
}

export interface IPostFrontMatter extends IPostFrontMatterBase {
  slug: string;
  readingTime: any;
}

export interface IPost {
  mdxSource: MdxRemote.Source;
  frontMatter: IPostFrontMatter;
}

const rootDir = process.cwd();
const blogDir = path.join(rootDir, "data", "blog");

export function getPosts() {
  return fs.readdirSync(blogDir);
}

export async function getPostBySlug(slug: string): Promise<IPost> {
  const source = fs.readFileSync(path.join(blogDir, `${slug}.mdx`), "utf8");

  const { data, content } = matter(source);

  const mdxSource = await renderToString(content, {
    mdxOptions: {
      remarkPlugins: [require("remark-code-titles")],
      rehypePlugins: [require("mdx-prism")],
    },
    scope: data,
  });

  return {
    mdxSource,
    frontMatter: {
      slug,
      readingTime: readingTime(content),
      ...(data as IPostFrontMatterBase),
    },
  };
}

export function getAllPostsFrontMatter(): IPostFrontMatter[] {
  const posts = getPosts();

  const postsFrontMatter = posts.reduce((allPosts: any, postSlug: any) => {
    const source = fs.readFileSync(path.join(blogDir, postSlug), "utf8");
    const { data, content } = matter(source);

    return [
      {
        slug: postSlug.replace(".mdx", ""),
        readingTime: readingTime(content),
        ...data,
      },
      ...allPosts,
    ];
  }, []);

  return postsFrontMatter.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
}
