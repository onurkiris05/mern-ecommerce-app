export enum CategoryEnum {
  TSHIRT = "t-shirt",
  SHIRT = "shirt",
  HOODIE = "hoodie",
  JACKET = "jacket",
  JEAN = "jean",
  SHORT = "short",
  SWEATER = "sweater",
  DRESS = "dress",
  SKIRT = "skirt",
  COAT = "coat",
  PANT = "pant",
}

export const CategoryOptions = Object.values(CategoryEnum).map((value) => ({
  label: value.charAt(0).toUpperCase() + value.slice(1),
  value,
}));

export enum GenderEnum {
  MEN = "men",
  WOMEN = "women",
  UNISEX = "unisex",
  CHILD = "child",
}

export const GenderOptions = Object.values(GenderEnum).map((value) => ({
  label: value.charAt(0).toUpperCase() + value.slice(1),
  value,
}));

export enum SizeEnum {
  XL = "XL",
  L = "L",
  M = "M",
  S = "S",
  XS = "XS",
}

export const SizeOptions = Object.values(SizeEnum).map((value) => ({
  label: value,
  value,
}));

export enum SortEnum {
  PRICE_ASC = "asc",
  PRICE_DESC = "desc",
  NEWEST = "newest",
}

export const SortOptions = [
  { label: "Price Low-to-High", value: SortEnum.PRICE_ASC },
  { label: "Price High-to-Low", value: SortEnum.PRICE_DESC },
  { label: "Newest", value: SortEnum.NEWEST },
];
