"use client"

import { Button } from "../ui/button";
import { UserCircle } from "lucide-react";

interface HeaderProps {
  onPostClick: () => void;
  onUserClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onPostClick, onUserClick }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-[#D6C4B8] text-black shadow-md">
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
        <button
          onClick={onUserClick}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <UserCircle size={24} />
        </button>
      </nav>
    </header>
  );
};

export default Header;
