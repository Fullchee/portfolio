import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import BlogList from "../../components/blog/BlogPostList";
import Layout from "../../components/layout";
import { getAllPostsFrontMatter, IPostFrontMatter } from "../../lib/mdx";

export default function BlogPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo title="Blog - Fullchee Zhang" />
      <BlogList posts={posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  posts: IPostFrontMatter[];
}> = async () => {
  const posts = getAllPostsFrontMatter();

  return {
    props: {
      posts,
    },
  };
};
