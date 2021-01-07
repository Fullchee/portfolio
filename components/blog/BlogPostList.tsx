import Link from "next/link";
import BlogPostCard from "./BlogPostCard";
import { IPostFrontMatter } from "../../lib/mdx";
import routes from "../../routes";
import Container from "../container";

interface BlogListProps {
  posts: IPostFrontMatter[];
  more?: boolean;
}

const BlogList: React.FC<BlogListProps> = ({ posts, more = false }) => {
  return (
    <Container>
      <h2 className="text-4xl md:text-5xl pt-12 font-medium font-display">
        Blog
      </h2>

      <div className="mt-10 flex flex-col space-y-10">
        {posts.map((p) => (
          <BlogPostCard key={p.slug} {...p} />
        ))}

        {more && (
          <div>
            <Link href={routes.BLOG}>
              <a className="font-medium hover:text-gray-600">View all posts</a>
            </Link>
          </div>
        )}
      </div>
    </Container>
  );
};

export default BlogList;
