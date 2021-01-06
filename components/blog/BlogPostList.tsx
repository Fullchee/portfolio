import Link from "next/link";
import BlogPostCard from "./BlogPostCard";
import { IPostFrontMatter } from "../../lib/mdx";
import routes from "../../routes";

interface BlogListProps {
  posts: IPostFrontMatter[];
  more?: boolean;
}

const BlogList: React.FC<BlogListProps> = ({ posts, more = false }) => {
  return (
    <>
      <h2 className="text-4xl md:text-5xl font-medium font-display">Blog</h2>

      <div className="mt-10 flex flex-col space-y-10">
        {posts.map((p) => (
          <BlogPostCard key={p.slug} {...p} />
        ))}

        {more && (
          <div>
            <Link href={routes.BLOG}>
              <a className="font-medium text-glongas-green-dark hover:text-gray-600">
                View all posts
              </a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogList;
