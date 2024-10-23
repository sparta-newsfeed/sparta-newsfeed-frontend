interface FriendDetailType {
  id: number;
  name: string;
  email: string;
  nickname: string;
  type: string;
}

interface UserInfoType {
  id: number;
  name: string;
  nickname: string;
  email: string;
  createdAt: string;
}

export type { FriendDetailType, UserInfoType };
