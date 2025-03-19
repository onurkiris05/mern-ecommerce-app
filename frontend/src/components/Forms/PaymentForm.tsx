import { useState, FormEvent } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "../Button";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
`;

const Form = styled.form``;

const ErrorMsg = styled.p`
  color: red;
`;

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: `${window.location.origin}/success` },
    });

    setIsProcessing(false);

    if (error) setErrorMessage(error.message as string);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <PaymentElement />
      {errorMessage && <ErrorMsg>{errorMessage}</ErrorMsg>}
      <ButtonWrapper>
        <Button.Primary size="1.5rem" type="submit" disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Pay Now"}
        </Button.Primary>
      </ButtonWrapper>
    </Form>
  );
}

export default PaymentForm;
