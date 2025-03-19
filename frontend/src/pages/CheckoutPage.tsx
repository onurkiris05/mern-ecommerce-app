import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Checkout from "../components/Checkout";

const Container = styled.div`
  max-width: var(--max-width);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

function CheckoutPage() {
  return (
    <Container>
      <Header />
      <Announcement />
      <Checkout />
      <Footer />
    </Container>
  );
}

export default CheckoutPage;
