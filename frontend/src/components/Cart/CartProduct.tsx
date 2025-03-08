import styled from "styled-components";
import { CartProductModel } from "../../data/cartItems";
import QuantityForm from "../Forms/QuantityForm";
import { Col, Container, Row } from "react-bootstrap";

interface CartProductProps {
  product: CartProductModel;
}

const Body = styled(Container)`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const ImageWrapper = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Text = styled.p`
  margin: 0;
`;

const Span = styled.span`
  font-weight: bold;
`;

const Color = styled.div<{ color: string }>`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

const QuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Price = styled.h2`
  font-size: 1.75rem;
  font-weight: 300;
`;

function CartProduct({ product }: CartProductProps) {
  return (
    <Body>
      <Row>
        <ImageWrapper as={Col} xs={4} sm={3}>
          <Image src={product.imgUrl} />
        </ImageWrapper>
        <DetailsWrapper as={Col} xs={8} sm={6} className="px-3 pt-4 pb-2 py-sm-4">
          <Text>
            <Span>Product: </Span>
            {product.name}
          </Text>
          <Text>
            <Span>ID: </Span>
            {product.id}
          </Text>
          <Color color={product.color} />
          <Text>
            <Span>Size: </Span>
            {product.size}
          </Text>
        </DetailsWrapper>
        <QuantityWrapper as={Col} sm={3}>
          <QuantityForm max={product.stock} size={1.5} onChange={() => {}} />
          <Price>$ {product.price}</Price>
        </QuantityWrapper>
      </Row>
    </Body>
  );
}

export default CartProduct;
