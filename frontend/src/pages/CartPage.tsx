import styled from "styled-components";
import Announcement from "../components/Announcement";
import Cart from "../components/Cart/Cart";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Container = styled.div`
  max-width: var(--max-width);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

function CartPage() {
  return (
    <Container>
      <Header />
      <Announcement />
      <Cart />
      <Footer />
    </Container>
  );
}

export default CartPage;
