import styled from "styled-components";
import { Button } from "../Button";
import { useSelector } from "react-redux";

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  shippingDiscount: number;
}

const Body = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-weight: 300;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Text = styled.p``;

const Summary = styled.h3``;

function CartSummary({ subtotal, shipping, shippingDiscount }: CartSummaryProps) {
  const total = useSelector((state: any) => state.cart.total);

  return (
    <Body>
      <Title>Order Summary</Title>
      <TextWrapper>
        <Text>Subtotal</Text>
        <Text>$ {subtotal.toFixed(2)}</Text>
      </TextWrapper>
      <TextWrapper>
        <Text>Estimated Shipping</Text>
        <Text>$ {shipping}</Text>
      </TextWrapper>
      <TextWrapper>
        <Text>Shipping Discount</Text>
        <Text>$ -{shippingDiscount}</Text>
      </TextWrapper>
      <TextWrapper>
        <Summary>Subtotal</Summary>
        <Summary>$ {total.toFixed(2)}</Summary>
      </TextWrapper>
      <Button.Secondary size="1rem" style={{ backgroundColor: "black" }}>
        CHECKOUT NOW
      </Button.Secondary>
    </Body>
  );
}

export default CartSummary;
