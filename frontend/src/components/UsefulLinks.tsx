import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 1.75rem;
  font-family: var(--ff-secondary);
  letter-spacing: 1px;
`;

const Link = styled.a`
  display: block;
  text-decoration: none;
  color: var(--clr-1);
  font-weight: 500;
`;

function UsefulLinks() {
  return (
    <Container fluid className="text-center text-sm-start my-4 my-sm-0">
      <Title className="mb-sm-4">Useful links</Title>
      <Row className="g-2">
        <Col md={6} className="d-flex flex-column gap-2">
          <Link href="#">Home</Link>
          <Link href="#">Man Fashion</Link>
          <Link href="#">Accessories</Link>
          <Link href="#">Order Tracking</Link>
          <Link href="#">Wishlist</Link>
        </Col>
        <Col md={6} className="d-flex flex-column gap-2">
          <Link href="#">Cart</Link>
          <Link href="#">Woman Fashion</Link>
          <Link href="#">My Account</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default UsefulLinks;
