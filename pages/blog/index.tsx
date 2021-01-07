import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import BlogList from "../../components/blog/BlogPostList";
import Layout from "../../components/layout";
import { getAllPostsFrontMatter, IPostFrontMatter } from "../../lib/mdx";

export default function BlogPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title="Blog - Fullchee Zhang" description="Fullchee's blog posts">
      <BlogList posts={posts} />
    </Layout>
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
