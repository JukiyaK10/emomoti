"use client";

import { useState } from "react";
import Header from "../components/layout/header";
import PostCard from "../components/layout/postcard";
import { Calendar } from "@/components/ui/calendar";
import React from "react";

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

  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div>
      <Header onPostClick={handlePostClick} />
      {showPostCard && <PostCard onClose={handleClosePostCard} onSubmit={handlePostSubmit} />}
      <div className="p-4 flex">
        <div className="flex-1">
          {posts.map((post, index) => (
            <div key={index} className="p-4 mb-4 bg-white shadow-md rounded-md">
              {post}
            </div>
          ))}
        </div>
        <div className="flex-none">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
      </div>
    </div>
  );
}
