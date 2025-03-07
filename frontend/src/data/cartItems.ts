export interface CartProductModel {
  id: number;
  name: string;
  size: string | number;
  color: string;
  quantity: number;
  stock: number;
  price: number;
  imgUrl: string;
}

const cartItems = [
  {
    id: 5465468454,
    name: "Coal Jacket",
    quantity: 1,
    stock: 10,
    size: "X-Large",
    color: "black",
    price: 25.99,
    imgUrl: "/assets/images/product-3.png",
  },
  {
    id: 5378468454,
    name: "Jackie Hat",
    quantity: 1,
    stock: 10,
    size: "Small",
    color: "brown",
    price: 12.99,
    imgUrl: "/assets/images/product-5.png",
  },
  {
    id: 5353948454,
    name: "Winniepesauke T-Shirt",
    quantity: 2,
    stock: 10,
    size: 6,
    color: "orange",
    price: 4.99,
    imgUrl: "/assets/images/product-2.png",
  },
];

export default cartItems;
