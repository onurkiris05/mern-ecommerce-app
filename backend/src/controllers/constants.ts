import { RequestHandler } from "express";
import { CategoryOptions, GenderOptions, SizeOptions, SortOptions } from "../constants/constants";

export const getConstants: RequestHandler = (req, res) => {
  const constants = {
    categoryOptions: CategoryOptions,
    genderOptions: GenderOptions,
    sizeOptions: SizeOptions,
    sortOptions: SortOptions,
  };

  res.status(200).json(constants);
};
