import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import hydrate from "next-mdx-remote/hydrate";
import Layout from "../../components/layout";
import { getPostBySlug, getPosts, IPost } from "../../lib/mdx";

export default function BlogPost({
  mdxSource,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const content = hydrate(mdxSource);

  return (
    <Layout
      title={frontMatter.title}
      description={frontMatter.summary}
      imageProps={{
        url: frontMatter.imageUrl,
        width: frontMatter.imageWidth,
        height: frontMatter.imageHeight,
        alt: frontMatter.imageAlt,
      }}
    >
      <h1 className="text-4xl font-bold">{frontMatter.title}</h1>
      <p className="mt-2 text-sm text-gray-600">
        {frontMatter.date} • {Math.ceil(frontMatter.readingTime.minutes)} min
        read
      </p>

      <article className="mt-6 prose max-w-none pb-16">{content}</article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getPosts();

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(".mdx", ""),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IPost> = async ({ params }) => {
  const post = await getPostBySlug(params!.slug as string);
  return { props: post };
};
