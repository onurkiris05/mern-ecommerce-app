import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
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
      <Content>
        <NotFoundMessage>PAGE NOT FOUND!</NotFoundMessage>
      </Content>
    </Container>
  );
}

export default NotFoundPage;
