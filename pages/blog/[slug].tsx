import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import hydrate from "next-mdx-remote/hydrate";
import { NextSeo } from "next-seo";
import Layout from "../../components/layout";
import { getPostBySlug, getPosts, IPost } from "../../lib/mdx";

export default function BlogPost({
  mdxSource,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const content = hydrate(mdxSource);

  return (
    <Layout>
      <NextSeo
        title={`${frontMatter.title} - Fullchee Zhang`}
        description={frontMatter.summary}
        openGraph={{
          title: `${frontMatter.title} - Fullchee Zhang`,
          description: frontMatter.summary,
        }}
      />

      <h1 className="text-4xl font-bold">{frontMatter.title}</h1>

      <p className="mt-2 text-sm text-gray-600">
        {frontMatter.date} • {Math.ceil(frontMatter.readingTime.minutes)} min
        read
      </p>

      <article className="mt-6 prose max-w-none">{content}</article>

      <div className="mt-14 p-6 bg-blue-100 border border-blue-200 rounded-md">
        <p className="text-2xl font-bold text-gray-800">Hey there 🙋‍♂️</p>

        <p className="mt-2 text-gray-800">
          If you liked the article or found it useful; you can follow me on
          Twitter to know what I'm up to, comment on anything about this post,
          or to say hi!
        </p>

        <a
          className="inline-block mt-4 px-3 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded"
          href="https://twitter.com/fullchee"
          target="_blank"
          rel="noopener noreferrer"
        >
          @fullchee
        </a>
      </div>
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
