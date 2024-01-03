"use client"

import axios from "axios";
import TitleHero from "../../_components/TitleHero";
import BlogPageCard from "../../_components/BlogPageCard";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";


const Blogs = () => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            try {
                const { data } = await axios.get(`/api/posts`);
                setPosts(data.posts);
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
            }
        }
        fetchData();
    }, []);

    if (!posts) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Error loading post. Please try again.</p>
            </div>
        );
    }

    return (
        <section>
            <TitleHero title="Blog Posts" />
            {posts && !isLoading ? <div className="px-5 md:px-24">
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
            </div> : <div className="flex items-center justify-center h-[calc(100vh-200px)]">
                <Loader size={60} className="animate-spin" color="gray" />
            </div>
            }
        </section>
    );
};

export default Blogs;
