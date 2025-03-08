import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import SingleProduct from "../components/Products/Product";

const Container = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;

function Product() {
  return (
    <Container>
      <Header />
      <Announcement />
      <SingleProduct />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Product;
