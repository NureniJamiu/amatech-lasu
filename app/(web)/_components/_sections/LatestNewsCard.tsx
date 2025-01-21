import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestNewsCard = ({ post }: any) => {
  return (
    <Link
      href={`blogs/${post?._id}`}
      className="flex flex-col justify-between shadow bg-white p-5 rounded hover:scale-105 transition-all duration-150 ease-in-out"
    >
      <div className="relative bg-white h-44 mb-5 rounded">
        <Image
          src={post?.image}
          fill
          alt="post image"
          className="absolute object-cover object-center"
        />
      </div>
      <div className="flex justify-between items-center">
        <small>{moment(post?.createdAt).format("LL")}</small>
        <small className="bg-yellow-300 py-1 px-2 rounded uppercase text-xs font-semibold ">
          {post?.category}
        </small>
      </div>
      <p className="pb-4 pt-1 text-xl font-semibold capitalize text-zinc-800 text-center">
        {post?.title}
      </p>
    </Link>
  );
};

export default LatestNewsCard;
