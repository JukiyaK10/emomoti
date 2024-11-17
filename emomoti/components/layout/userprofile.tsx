import React, { useState, useEffect } from 'react';
import { ArrowLeft, UserCircle } from 'lucide-react';
import { Button } from "../ui/button";
import { getPosts, type Post } from '@/lib/postAdaptor';

interface UserProfileProps {
  onClose: () => void;
  onPostClick: () => void;  // 追加
}

const UserProfile: React.FC<UserProfileProps> = ({ onClose, onPostClick }) => {
  const [userPosts, setUserPosts] = useState<Post[]>([]);

  useEffect(() => {
    const posts = getPosts(); // 全ての投稿を取得
    setUserPosts(posts);
  }, []);

  const handlePostButtonClick = () => {
    onClose();  // プロフィール画面を閉じる
    onPostClick();  // 投稿モーダルを開く
  };

  return (
    <div className="fixed inset-0 bg-[#EBD9CD] z-50 flex flex-col">
      {/* ヘッダー */}
      <header className="flex-none flex items-center justify-between p-4 bg-[#D6C4B8] text-black shadow-md">
        <div className="flex items-center gap-4">
          <button 
            onClick={onClose} 
            className="hover:bg-[#CBB8A8] p-2 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <span className="text-xl font-bold">eMOTI</span>
        </div>
        <nav className="flex gap-4">
          <Button
            className="bg-[#EBD9CD] hover:bg-[#CBB8A8] text-black font-bold py-2 px-4 rounded"
            onClick={handlePostButtonClick}
          >
            つぶやく
          </Button>
          <button className="p-2 hover:bg-[#CBB8A8] rounded-full">
            <UserCircle size={24} />
          </button>
        </nav>
      </header>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* プロフィール情報（固定） */}
        <div className="flex-none bg-[#EBD9CD]">
          <div className="max-w-2xl mx-auto px-4"> {/* max-w-4xl から max-w-2xl に変更 */}
            <div className="py-6"> {/* py-8 から py-6 に変更 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-[#D6C4B8] rounded-full mb-3"></div> {/* サイズとマージンを調整 */}
                <div className="w-full">
                  <h1 className="text-xl font-bold mb-1 text-black">JKのJK</h1> {/* フォントサイズを調整 */}
                  <p className="text-gray-700 mb-3">@username</p> {/* マージンを調整 */}
                  <p className="text-gray-800 mb-4">もち投げ歴　１０年</p> {/* マージンを調整 */}
                  <div className="flex justify-center gap-4 text-gray-700"> {/* ギャップを調整 */}
                    <div className="bg-[#D6C4B8] px-3 py-2 rounded-lg text-sm"> {/* パディングとフォントサイズを調整 */}
                      <span className="font-bold">100</span> もち投げ数
                    </div>
                    <div className="bg-[#D6C4B8] px-3 py-2 rounded-lg text-sm">
                      <span className="font-bold">2024/02</span> から利用
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* タブ（固定） - いいねタブを削除 */}
        <div className="flex-none bg-[#EBD9CD] border-b border-[#CBB8A8]">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex justify-center"> {/* 中央寄せに変更 */}
              <button className="px-4 py-3 border-b-2 border-black font-medium text-black">
                えもち
              </button>
            </div>
          </div>
        </div>

        {/* 投稿一覧（スクロール可能） - レイアウトを調整 */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-2xl mx-auto px-4"> {/* max-w-4xlからmax-w-2xlに変更して中央寄せ */}
            <div className="py-6 space-y-4">
              {userPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-all">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-gray-500 text-sm">
                      {post.createdAt.toLocaleString('ja-JP')}
                    </div>
                    <div className="text-sm text-gray-600">
                      #{post.id}
                    </div>
                  </div>
                  <p className="text-lg mb-4">{post.content}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(post.emotions)
                      .filter(([_, value]) => value > 0) // 値が0より大きい感情のみ表示
                      .map(([emotion, value]) => (
                        <div key={emotion} className="flex items-center">
                          <span className="w-16 text-sm font-medium">{emotion}</span>
                          <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-400 rounded-full"
                              style={{ width: `${value}%` }}
                            ></div>
                          </div>
                          <span className="ml-2 text-sm text-gray-600">{value}%</span>
                        </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;