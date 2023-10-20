import Link from "next/link";

interface BlogPageCardProps {
  date: string;
  title: string;
  desc: string;
  slug: string;
}

const BlogPageCard: React.FC<BlogPageCardProps> = ({ date, title, desc, slug }) => {
  return (
    <div className="flex flex-col justify-center border rounded ">
      <div className="p-5 border-b">
        <span className="text-xs text-gray-600">{date}</span>
        <h4 className="font-semibold mt-2">{title}</h4>
        <p
          className="text-sm my-8 line-clamp-4 mb"
          dangerouslySetInnerHTML={{ __html: desc }}
        ></p>
      </div>
      <Link href={slug} className="text-center font-bold text-xs py-5">
        Read More
      </Link>
    </div>
  );
};

export default BlogPageCard;
