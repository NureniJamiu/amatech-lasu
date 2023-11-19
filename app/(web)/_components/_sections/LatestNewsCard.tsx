import moment from "moment";
import Link from "next/link";
import React from "react";

type Post = {
    _id: string
    title: string
    category: string
    content: string
    image: string
}

const LatestNewsCard = ({ post }: any) => {
    return (
        <Link
            href={`blogs/${post?._id}`}
            className="flex flex-col justify-between shadow bg-white p-5 rounded hover:scale-105 transition-all duration-150 ease-in-out"
        >
            <div className="flex justify-between items-center">
                <small>{moment(post?.createdAt).format("LL")}</small>
                <small className="bg-yellow-400 p-1 rounded uppercase text-xs font-semibold">
                    {post?.category}
                </small>
            </div>
            <p className="pb-4 pt-1 text-xl font-semibold">{post?.title}</p>
            <Link href={`blogs/${post?._id}`} className="text-green-700">
                Read More &gt;&gt;&gt;
            </Link>
        </Link>
    );
};

export default LatestNewsCard;
