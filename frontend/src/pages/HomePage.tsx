import styled from "styled-components";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products/Products";
import Slider from "../components/Slider";

const Container = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;

function Home() {
  return (
    <Container>
      <Header />
      <Announcement />
      <Slider />
      <Categories />
      <Products gender="" filters={{}} sort="" />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Home;
