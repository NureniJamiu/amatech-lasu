"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import moment from "moment/moment";
import Image from "next/image";
import { Loader } from "lucide-react";

interface Post {
    _id: string,
    title: string;
    content: any,
    category: string,
    image: string,
    author: string,
    createdAt: string,
}

const SingleBlog = () => {
    const param = useParams();
    const { postId } = param
    const [post, setPost] = useState<Post | null>(null);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            try {
                const { data } = await axios.get(`/api/posts/${postId}`);
                setPost(data.post);
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                console.log(error)
            }
        }
        fetchData();
    }, [postId]);

    if (!post && isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Loader size={60} className="animate-spin" color="gray" />
            </div>
        );
    }

    if (!post) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Error loading post. Please try again.</p>
            </div>
        );
    }

    return (
        <section className="flex justify-center items-center">
            <div className="w-full">
                <div className="relative h-64 bg-green-600">
                    <Image src={post?.image} alt="" fill className="absolute object-cover" />
                    <div className="absolute bg-black top-0 left-0 right-0 w-full h-full bg-opacity-70"></div>
                    <div className="absolute w-full h-full flex items-center justify-center text-center mb-8">
                        <div className="text-gray-300">
                            <h2 className=" font-bold text-3xl md:text-4xl lg:text-6xl text-center mb-2 capitalize px-5 md:px-20 lg:w-11/12 mx-auto">
                                {post?.title}
                            </h2>
                            <small>
                                {moment(post?.createdAt).format("LL")} by{" "}
                                <Link href="#" className="underline text-green-600 font-bold">
                                    {post.author ? `Comrade ${post.author}` : "the administration P.R.O"}
                                </Link>
                            </small>
                        </div>
                    </div>
                </div>
                <div className="p-8 md:px-24 lg:px-[280px]">
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: post?.content }}></div>
                        <div className="mt-12">
                            <p>Comr. Nureni Jamiu (Penocrat),</p>
                            <p>Public Relations Officer (P.R.O),</p>
                            <p>Amatech Lasu 21st Administration, {"'"}23.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default SingleBlog;
