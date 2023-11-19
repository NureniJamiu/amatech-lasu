import moment from "moment";
import Image from "next/image";
import Link from "next/link";


const BlogPageCard = ({ post }: any) => {

  const markup = { __html: post?.content }

  return (
    <div className="flex flex-col justify-center border rounded ">
      <div className="relative bg-white h-44 rounded" >
        <Image src={post?.image} fill alt="post image" className="absolute object-cover object-center" />
      </div>
      <div className="p-5 border-b">
        <div className="flex items-center justify-between">
          <small>{moment(post?.createdAt).format("LL")}</small>
          <small className="bg-yellow-400 py-1 px-2 rounded uppercase font-semibold">{post?.category}</small>
        </div>
        <h2 className="font-semibold mt-1 text-xl capitalize text-zinc-800 border-t pt-2">{post?.title}</h2>
        <p
          className="text-sm my-3 line-clamp-2 mb text-gray-700"
          dangerouslySetInnerHTML={markup}
        ></p>
      </div>
      <Link href={`blogs/${post?._id}`} className="text-center font-bold text-xs py-3">
        Read More
      </Link>
    </div>
  );
};

export default BlogPageCard;
