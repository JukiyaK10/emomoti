
export type Post = {
  id: string;
  content: string;
  emotions: {
    怒り: number;
    好き: number;
    楽しい: number;
    悲しい: number;
    恐れ: number;
  };
  createdAt: Date;
};

// ダミーデータの生成
export const dummyPosts: Post[] = [
  {
    id: "1",
    content: "今日は楽しい一日でした！友達と遊園地に行ってきました。",
    emotions: {
      怒り: 0,
      好き: 80,
      楽しい: 90,
      悲しい: 0,
      恐れ: 10,
    },
    createdAt: new Date("2024-02-20T10:00:00"),
  },
  {
    id: "2",
    content: "仕事でミスしてしまい、上司に怒られました...",
    emotions: {
      怒り: 70,
      好き: 0,
      楽しい: 0,
      悲しい: 85,
      恐れ: 60,
    },
    createdAt: new Date("2024-02-19T15:30:00"),
  },
  {
    id: "3",
    content: "新しい趣味を見つけました！写真撮影が楽しい！",
    emotions: {
      怒り: 0,
      好き: 95,
      楽しい: 100,
      悲しい: 0,
      恐れ: 0,
    },
    createdAt: new Date("2024-02-18T18:45:00"),
  },
];

// 投稿の取得
export const getPosts = () => {
  return dummyPosts;
};

// 投稿の追加
export const addPost = (content: string, emotions: Post['emotions']) => {
  const newPost: Post = {
    id: (dummyPosts.length + 1).toString(),
    content,
    emotions,
    createdAt: new Date(),
  };
  dummyPosts.unshift(newPost);
  return newPost;
};