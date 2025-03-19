import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Button } from "../Button";
import CartProduct from "./CartProduct";
import CartSummary from "./CartSummary";
import { md } from "../../utils/responsive";
import { useSelector } from "react-redux";

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  ${md({
    borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
  })}
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
  margin-right: 4rem;
`;

const Link = styled.a`
  cursor: pointer;
  color: var(--clr-1);
`;

const Span = styled.span``;

function Cart() {
  const { products, quantity, total } = useSelector((state: any) => state.cart);

  return (
    <Body className="pt-5 px-1 px-sm-4">
      <Title>Your Bag</Title>
      <NavWrapper>
        <Button.Secondary size="1rem" style={{ background: "var(--clr-1)" }}>
          CONTINUE SHOPPING
        </Button.Secondary>
        <LinkWrapper className="d-none d-sm-flex">
          <Link>
            Shopping Bag (<Span>{quantity}</Span>)
          </Link>
          <Link>
            Your Wishlist (<Span>0</Span>)
          </Link>
        </LinkWrapper>
      </NavWrapper>
      <Container fluid className="pt-4">
        <Row>
          <Col md={8}>
            {products.map((item: any, i: number) => (
              <CartProduct key={i} product={item} />
            ))}
          </Col>
          <Col md={4}>
            <CartSummary subtotal={total} shipping={5.99} shippingDiscount={5.99} />
          </Col>
        </Row>
      </Container>
    </Body>
  );
}

export default Cart;
