import { useState } from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

export default function PostCard({ onClose, onSubmit }: { onClose: () => void, onSubmit: (content: string, emotions: { [key: string]: number[] }) => void }) {
  const [content, setContent] = useState("");
  const [emotions, setEmotions] = useState({
    怒り: [0],
    好き: [0],
    楽しい: [0],
    悲しい: [0],
    恐れ: [0],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(content, emotions);
    setContent("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <Card className="relative w-3/4 max-w-lg">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ×
        </button>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit}>
            <textarea
              className="w-full p-2 border rounded-md mb-4"
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="今何してる？"
            />
            <div className="space-y-6">
              {Object.entries(emotions).map(([emotion, value]) => (
                <div key={emotion}>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium">{emotion}</label>
                    <span className="text-sm text-gray-500">{value}%</span>
                  </div>
                  <Slider
                    defaultValue={[0]}
                    max={100}
                    step={1}
                    value={value}
                    onValueChange={(newValue) =>
                      setEmotions((prev) => ({ ...prev, [emotion]: newValue }))
                    }
                  />
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-[#EBD9CD] hover:bg-[#CBB8A8] text-black font-bold py-2 px-4 rounded"
            >
              投稿
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}