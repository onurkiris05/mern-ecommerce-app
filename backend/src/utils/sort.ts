import { SortEnum } from "../constants/constants";
import { SortOrder } from "mongoose";

export const getSortOption = (sortQuery?: string): { [key: string]: SortOrder } => {
  if (!sortQuery || !Object.values(SortEnum).includes(sortQuery as SortEnum)) {
    // if sortQuery is not provided or
    // is not one of the valid options,
    // return newest items first
    return { createdAt: -1 };
  }

  switch (sortQuery) {
    case SortEnum.PRICE_ASC:
      return { price: 1 };
    case SortEnum.PRICE_DESC:
      return { price: -1 };
    case SortEnum.NEWEST:
      return { createdAt: -1 };
    default:
      return {};
  }
};
