import styled from "styled-components";
import { Button } from "../Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPaymentIntent } from "../../api/stripe";
import { useState } from "react";

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
  const [isProcessing, setIsProcessing] = useState(false);
  const total = useSelector((state: any) => state.cart.total);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    try {
      setIsProcessing(true);
      const clientSecret = await createPaymentIntent(total);
      navigate("/checkout", { state: { clientSecret } });
    } catch (error) {
      alert("Payment error! Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

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
      <Button.Secondary
        onClick={handleCheckout}
        disabled={isProcessing}
        size="1rem"
        style={{ backgroundColor: "var(--clr-1)" }}
      >
        {isProcessing ? "Processing..." : "CHECKOUT NOW"}
      </Button.Secondary>
    </Body>
  );
}

export default CartSummary;
