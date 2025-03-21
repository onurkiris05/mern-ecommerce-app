import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Success from "../components/Success";

const Container = styled.div`
  max-width: var(--max-width);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

function SuccessPage() {
  return (
    <Container>
      <Header />
      <Announcement />
      <Success />
      <Footer />
    </Container>
  );
}

export default SuccessPage;
