import styled from "styled-components";
import { CartProductModel } from "../../data/cartItems";
import QuantityForm from "../Forms/QuantityForm";

interface CartProductProps {
  product: CartProductModel;
}

const Body = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const ImageWrapper = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DetailsWrapper = styled.div`
  flex: 3;
  padding: 2rem 1rem;
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
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Price = styled.h2`
  font-size: 1.75rem;
  font-weight: 300;
`;

function CartProduct({ product }: CartProductProps) {
  return (
    <Body>
      <ImageWrapper>
        <Image src={product.imgUrl} />
      </ImageWrapper>
      <DetailsWrapper>
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
      <QuantityWrapper>
        <QuantityForm max={product.stock} size={1.5} onChange={() => {}} />
        <Price>$ {product.price}</Price>
      </QuantityWrapper>
    </Body>
  );
}

export default CartProduct;
