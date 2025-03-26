import { fetchData } from "./fetchData";
import { User, PublicUser } from "../models/user";

export interface UserLoginInput {
  username: string;
  password: string;
}

export const login = async (user: UserLoginInput): Promise<User> => {
  const response = await fetchData("/api/auths/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  return response.json();
};

export const getAllUsers = async (latest?: boolean): Promise<PublicUser[]> => {
  const query = latest ? "?new=true" : "";
  const response = await fetchData(`/api/users${query}`, { method: "GET" });
  return response.json();
};

export const getUser = async (id: string): Promise<PublicUser> => {
  const response = await fetchData(`/api/users/${id}`, { method: "GET" });
  return response.json();
};

export interface UserInput {
  username?: string;
  password?: string;
  email?: string;
}

export const createUser = async (user: UserInput): Promise<PublicUser> => {
  const response = await fetchData(`/api/auths/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  return response.json();
};

export const updateUser = async (id: string, user: UserInput): Promise<PublicUser> => {
  const response = await fetchData(`/api/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  return response.json();
};

export const deleteUser = async (id: string) => {
  await fetchData(`/api/users/${id}`, { method: "DELETE" });
};
