import Announcement from "../components/Announcement";
import FilterProducts from "../components/Products/FilterProducts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import styled from "styled-components";

const Container = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;

function ProductList() {
  return (
    <Container>
      <Header />
      <Announcement />
      <FilterProducts />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList;
