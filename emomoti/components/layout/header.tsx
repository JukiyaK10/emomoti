"use client"

import { Button } from "../ui/button";

export default function Header({ onPostClick }: { onPostClick: () => void }) {
  return (
    <header className="flex items-center justify-between p-4 bg-[#D6C4B8] text-black">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold">eMOTI</span>
      </div>
      <nav className="flex gap-4">
        <Button
          className="bg-[#EBD9CD] hover:bg-[#CBB8A8] text-black font-bold py-2 px-4 rounded"
          onClick={onPostClick}
        >
          つぶやく
        </Button>
      </nav>
    </header>
  );
}
