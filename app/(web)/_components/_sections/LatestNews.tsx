"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import BlogPageCard from "../BlogPageCard";
import { Loader } from "lucide-react";

const LatestNews = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`/api/posts`);
        setPosts(data.posts);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
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
    <section className="bg-[#fafafa] px-8 md:px-0 py-5 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl">
            Latest <span className="text-[#227e5f] font-semibold">News</span>
          </h2>
          <span className="italic">Updates from the Office of the P.R.O</span>
        </div>

        {posts && !isLoading ? (
          <div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <BlogPageCard key={i} post={post} />
              ))}
            </div>
            <div className="text-center">
              <a
                href="/blogs"
                className="bg-green-600 inline-block rounded mt-5 px-5 py-2 cursor-pointer text-gray-100 hover:bg-green-500"
              >
                View all posts
              </a>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-96">
            <Loader size={60} className="animate-spin" color="gray" />
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestNews;
