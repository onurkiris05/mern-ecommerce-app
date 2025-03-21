import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { setAddress } from "../redux/addressRedux";
import { removeCart } from "../redux/cartRedux";
import * as OrderApi from "../api/orders";

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
`;

const TextMuted = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 300;
`;

function Success() {
  const [orderId, setOrderId] = useState<string | null>(null);
  const orderAddress = useSelector((state: any) => state.address.orderAddress);
  const cart = useSelector((state: any) => state.cart);
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRedirect = () => {
    dispatch(setAddress(null));
    navigate("/");
  };

  useEffect(() => {
    const createOrder = async () => {
      const newOrder: OrderApi.OrderInput = {
        userId: currentUser._id,
        products: cart.products.map((item: any) => ({
          productId: item._id,
          quantity: item.quantity,
        })),
        amount: cart.total,
        address: orderAddress,
      };

      try {
        const res = await OrderApi.createOrder(newOrder);
        setOrderId(res._id);
        dispatch(removeCart());
      } catch (error) {
        console.error("Error creating order: ", error);
      }
    };
    cart.total && createOrder();
  }, [cart, currentUser, orderAddress]);

  return (
    <Body>
      <Text>Your order has been successfully placed!</Text>
      <TextMuted>{orderId && `Order Id: ${orderId}`}</TextMuted>
      <Button.Primary size="1.25rem" onClick={handleRedirect}>
        BACK TO HOMEPAGE
      </Button.Primary>
    </Body>
  );
}

export default Success;
