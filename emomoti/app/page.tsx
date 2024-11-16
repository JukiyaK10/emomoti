"use client";

import { useState, useEffect } from "react";
import Header from "../components/layout/header";
import PostCard from "../components/layout/postcard";
import { Calendar } from "@/components/ui/calendar";
import { getPosts, addPost, type Post } from "@/lib/postAdaptor";
import React from "react";

export default function Home() {
  const [showPostCard, setShowPostCard] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  const handlePostClick = () => {
    setShowPostCard(true);
  };

  const handleClosePostCard = () => {
    setShowPostCard(false);
  };

  const handlePostSubmit = (content: string, emotions: Post['emotions']) => {
    const newPost = addPost(content, emotions);
    setPosts([newPost, ...posts]);
    setShowPostCard(false);
  };

  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const filteredPosts = posts.filter((post) => {
    if (!date) return true;
    return (
      post.createdAt.getFullYear() === date.getFullYear() &&
      post.createdAt.getMonth() === date.getMonth() &&
      post.createdAt.getDate() === date.getDate()
    );
  });

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header onPostClick={handlePostClick} />
      </div>
      <div className="pt-16"> {/* ヘッダーの高さ分のパディング */}
        {showPostCard && <PostCard onClose={handleClosePostCard} onSubmit={handlePostSubmit} />}
        <div className="p-4 flex">
          <div className="flex-1">
            {filteredPosts.map((post, index) => (
              <div key={index} className="p-4 mb-4 bg-white shadow-md rounded-md">
                <div className="mb-2 text-gray-500 text-sm">
                  {post.createdAt.toLocaleString('ja-JP')}
                </div>
                <p className="text-lg mb-4">{post.content}</p>
                <div className="space-y-2">
                  {Object.entries(post.emotions).map(([emotion, value]) => (
                    <div key={emotion} className="flex items-center">
                      <span className="w-16 text-sm">{emotion}</span>
                      <div className="flex-1 h-4 bg-gray-200 rounded">
                        <div
                          className="h-full bg-blue-500 rounded"
                          style={{ width: `${value}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-sm">{value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex-none ml-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border bg-white"
            />
            <button 
              onClick={() => setDate(undefined)}
              className="mt-2 w-full p-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
            >
              すべての投稿を表示
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
