interface ArticleTitleType {
  id: number;
  title: string;
  body: string;
  author: AuthorType;
  updatedAt: string;
  commentCounts: number;
}

interface ArticleDetailType {
  author: AuthorType;
  body: string;
  liked: boolean;
  title: string;
  updatedAt: string;
  id: number;
}

interface AuthorType {
  id: number;
  name: string;
  nickname: string;
  email: string;
  createdAt: string;
}

export type { ArticleTitleType, ArticleDetailType };
