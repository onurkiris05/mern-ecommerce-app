import { fetchData } from "./fetchData";
import { User } from "../models/user";

export interface UserInput {
  username: string;
  password: string;
}

export const login = async (user: UserInput): Promise<User> => {
  const response = await fetchData("/api/auths/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  return response.json();
};
