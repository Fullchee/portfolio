import Link from "next/link";
import { IPostFrontMatter } from "../../lib/mdx";

const BlogPostCard: React.FC<IPostFrontMatter> = ({
  slug,
  title,
  date,
  summary,
  readingTime,
}) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="group">
        <div className="w-24 h-1 origin-left transform group-hover:scale-x-150 duration-200 bg-glongas-green group-hover:bg-gray-600" />

        <h3 className="mt-2 text-2xl font-bold">{title}</h3>

        <p className="mt-1 text-sm text-gray-600">
          {date} • {Math.ceil(readingTime.minutes)} min read
        </p>

        <p className="mt-2 text-gray-700">{summary}</p>
      </a>
    </Link>
  );
};

export default BlogPostCard;
