"use client"

import { Button } from "../ui/button";

export default function Header({ onPostClick }: { onPostClick: () => void }) {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold">eMOTI</span>
      </div>
      <nav className="flex gap-4">
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onPostClick}
        >
          つぶやく
        </Button>
      </nav>
    </header>
  );
}
