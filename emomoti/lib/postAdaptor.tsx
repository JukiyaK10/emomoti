export type Post = {
  id: string;
  userId: string;  // 追加
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
  // 11月のダミーデータを追加
  {
    id: "10",
    userId: "user1",
    content: "紅葉がとてもきれいでした！秋の散歩は最高！",
    emotions: {
      怒り: 0,
      好き: 95,
      楽しい: 90,
      悲しい: 0,
      恐れ: 0,
    },
    createdAt: new Date("2024-11-15T14:30:00"),
  },
  {
    id: "11",
    userId: "user2",
    content: "秋の味覚祭りに行ってきました！松茸の香りが最高でした。",
    emotions: {
      怒り: 0,
      好き: 100,
      楽しい: 85,
      悲しい: 0,
      恐れ: 0,
    },
    createdAt: new Date("2024-11-10T12:15:00"),
  },
  {
    id: "12",
    userId: "user1",
    content: "寒くなってきて少し憂鬱...",
    emotions: {
      怒り: 0,
      好き: 0,
      楽しい: 0,
      悲しい: 60,
      恐れ: 30,
    },
    createdAt: new Date("2024-11-05T18:45:00"),
  },
  // 既存のダミーデータ
  {
    id: "4",
    userId: "user1",
    content: "今日の朝は気持ちよく目覚められました！",
    emotions: {
      怒り: 0,
      好き: 70,
      楽しい: 85,
      悲しい: 0,
      恐れ: 0,
    },
    createdAt: new Date(),
  },
  {
    id: "5",
    userId: "user1",
    content: "新しいプロジェクトが始まって、わくわくしています！",
    emotions: {
      怒り: 0,
      好き: 90,
      楽しい: 95,
      悲しい: 0,
      恐れ: 10,
    },
    createdAt: new Date(),
  },
  {
    id: "1",
    userId: "user2",
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
    userId: "user2",
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
    userId: "user3",
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
    userId: "user1", // 仮のユーザーID
    content,
    emotions,
    createdAt: new Date(),
  };
  dummyPosts.unshift(newPost);
  return newPost;
};

// ユーザーの投稿を取得する関数を追加
export const getUserPosts = (userId: string) => {
  return dummyPosts.filter(post => post.userId === userId);
};