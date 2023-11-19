"use client";

import { useState, useEffect } from "react";
// import BlogSectionCard from "./BlogSectionCard";
import moment from "moment";
import axios from "axios";
import LatestNewsCard from "./LatestNewsCard";

const LatestNews = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("/api/posts");
            // console.log(response)
            if (response?.data?.status === 200) {
                setPosts(response?.data?.posts);
            } else {
                setPosts([])
            }
        }
        fetchData();
    }, [posts]);
    return (
        <section className="flex flex-col justify-center items-center bg-[#fafafa] px-8 md:px-24 py-5">
            {/* <BlogCard /> */}
            <div className="text-center mb-8">
                <h2 className="text-3xl">
                    Latest <span className="text-[#227e5f] font-semibold">News</span>
                </h2>
                <span className="italic">Updates from the Office of the P.R.O</span>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {posts && posts.map((post, i) => (
                    <LatestNewsCard
                        key={i}
                        post={post}
                    />
                ))}
            </div>
            <button className="bg-green-600 px-3 py-2 mt-5 rounded-lg text-gray-100 hover:translate-y-1 transition-all duration-100 ease-in-out">
                More Posts &gt;
            </button>
        </section>
    );
};

export default LatestNews;
