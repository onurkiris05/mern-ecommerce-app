import { fetchData } from "./fetchData";

export interface OptionProps {
  label: string;
  value: string | number;
}

export interface ConstantsProps {
  categoryOptions: OptionProps[];
  genderOptions: OptionProps[];
  sizeOptions: OptionProps[];
  sortOptions: OptionProps[];
}

export async function getConstants(): Promise<ConstantsProps> {
  const response = await fetchData("/api/constants", { method: "GET" });
  return response.json();
}
