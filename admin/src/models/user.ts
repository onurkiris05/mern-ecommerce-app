export interface User {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
  token: string;
}

export type PublicUser = Omit<User, "token">;
