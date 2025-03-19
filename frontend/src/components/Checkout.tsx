import { useLocation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import PaymentForm from "./Forms/PaymentForm";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Body = styled.div`
  flex: 1;
  margin: 4rem auto;
  width: min(30rem, 90%);
  padding: 1.5rem;
  border: 1px solid lightgray;
  border-radius: 1rem;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 2rem;
`;

const Desc = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
`;

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY as string);

function Checkout() {
  const location = useLocation();
  const clientSecret = location.state?.clientSecret;
  const total = useSelector((state: any) => state.cart.total);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: { theme: "stripe" },
  };

  return (
    <Body>
      <Title>Checkout</Title>
      <Desc>
        Total: <strong>${total}</strong>
      </Desc>
      {clientSecret ? (
        <Elements stripe={stripePromise} options={options}>
          <PaymentForm />
        </Elements>
      ) : (
        <p>Loading...</p>
      )}
    </Body>
  );
}

export default Checkout;
