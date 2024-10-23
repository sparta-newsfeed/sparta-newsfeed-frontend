interface CommentType {
  id: number;
  commenter: AuthorType;
  body: string;
  updatedAt: string;
  liked: boolean;
}

interface AuthorType {
  id: number;
  name: string;
  nickname: string;
  email: string;
  createdAt: string;
}

export type { CommentType };
