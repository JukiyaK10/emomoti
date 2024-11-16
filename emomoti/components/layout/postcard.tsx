import { useState } from "react";

export default function PostCard({ onClose, onSubmit }: { onClose: () => void, onSubmit: (content: string) => void }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(content);
    setContent("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md shadow-md">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ×
        </button>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full p-2 border rounded-md"
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="今何してる？"
          />
          <button
            type="submit"
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            投稿
          </button>
        </form>
      </div>
    </div>
  );
}