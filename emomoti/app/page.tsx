"use client";

import { useState } from "react";
import Header from "../components/layout/header";
import PostCard from "../components/layout/postcard";
// import { Card } from "@/components/ui/card";
// import Image from "next/image"

export default function Home() {
  const [showPostCard, setShowPostCard] = useState(false);
  const [posts, setPosts] = useState<string[]>([]);

  const handlePostClick = () => {
    setShowPostCard(true);
  };

  const handleClosePostCard = () => {
    setShowPostCard(false);
  };

  const handlePostSubmit = (content: string) => {
    setPosts([content, ...posts]);
    setShowPostCard(false);
  };

  return (
    <div>
      <Header onPostClick={handlePostClick} />
      {showPostCard && <PostCard onClose={handleClosePostCard} onSubmit={handlePostSubmit} />}
      <div className="p-4">
        {posts.map((post, index) => (
          <div key={index} className="p-4 mb-4 bg-white shadow-md rounded-md">
            {post}
          </div>
        ))}
      </div>
    </div>
  );
}
