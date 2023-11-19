"use client"

import axios from "axios";
import TitleHero from "../../_components/TitleHero";
import BlogPageCard from "../../_components/BlogPageCard";
import { useEffect, useState } from "react";


const Blogs = () => {
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
        <section>
            <TitleHero title="Blog Posts" />
            <div className="px-8 md:px-24">
                <div className="flex gap-3 items-center mb-12 mt-5 py-8 md:py-8 border-b text-sm md:text-[15px]">
                    <span className="text-gray-600">Category:</span>
                    <select className="w-28 text-center text-green-600 border rounded py-2">
                        <option value="0">General</option>
                        <option value="1">Sports</option>
                        <option value="2">Welfare</option>
                        <option value="3">SLC</option>
                        <option value="4">Finance</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mb-8">
                    {posts.map((post, index) => (
                        <BlogPageCard
                            key={index}
                            post={post}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
