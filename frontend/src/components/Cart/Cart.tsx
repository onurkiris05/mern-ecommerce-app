import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Button } from "../Button";
import cartItems from "../../data/cartItems";
import CartProduct from "./CartProduct";
import CartSummary from "./CartSummary";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 2rem;
  font-weight: 300;
`;

const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const Link = styled.a`
  cursor: pointer;
  color: var(--clr-1);
`;

const Span = styled.span``;

function Cart() {
  return (
    <Body className="py-5 px-4">
      <Title>Your Bag</Title>
      <NavWrapper>
        <Button.Primary size="1rem">CONTINUE SHOPPING</Button.Primary>
        <LinkWrapper className="d-none d-sm-flex">
          <Link>
            Shopping Bag (<Span>0</Span>)
          </Link>
          <Link>
            Your Wishlist (<Span>0</Span>)
          </Link>
        </LinkWrapper>
        <Button.Secondary style={{ background: "#333" }} size="1rem">
          CHECKOUT NOW
        </Button.Secondary>
      </NavWrapper>
      <Container className="py-4">
        <Row>
          <Col sm={8}>
            {cartItems.map((item) => (
              <CartProduct product={item} />
            ))}
          </Col>
          <Col sm={4}>
            <CartSummary subtotal={44.0} shipping={5.99} shippingDiscount={5.99} />
          </Col>
        </Row>
      </Container>
    </Body>
  );
}

export default Cart;
