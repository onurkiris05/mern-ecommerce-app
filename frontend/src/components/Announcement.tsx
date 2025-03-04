import styled from "styled-components";

const Container = styled.div`
  padding: 0.5rem 0;
  background-color: var(--clr-3);
  text-align: center;
  letter-spacing: 1px;
`;

function Announcement() {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
}

export default Announcement;
