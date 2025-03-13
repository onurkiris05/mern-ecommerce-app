import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Container = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NotFoundMessage = styled.h1`
  text-align: center;
`;

function NotFoundPage() {
  return (
    <Container>
      <Header />
      <Announcement />
      <Content>
        <NotFoundMessage>PAGE NOT FOUND!</NotFoundMessage>
      </Content>
      <Footer />
    </Container>
  );
}

export default NotFoundPage;
