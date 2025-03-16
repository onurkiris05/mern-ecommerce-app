import styled from "styled-components";
import QuantityForm from "../Forms/QuantityForm";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { updateProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

interface CartProductProps {
  product: {
    _id: string;
    title: string;
    desc: string;
    img: string;
    price: number;
    quantity: number;
    color: string;
    size: string;
    stock: number;
  };
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
  const [qty, setQty] = useState(product.quantity);
  const dispatch = useDispatch();

  const handleQuantity = (qty: number) => {
    setQty(qty);
    dispatch(updateProduct({ ...product, quantity: qty }));
  };

  return (
    <Body>
      <Row>
        <ImageWrapper as={Col} xs={4} sm={3}>
          <Image src={product.img} />
        </ImageWrapper>
        <DetailsWrapper as={Col} xs={8} sm={6} className="px-3 pt-4 pb-2 py-sm-4">
          <Text>
            <Span>Product: </Span>
            {product.title}
          </Text>
          <Text>
            <Span>ID: </Span>
            {product._id}
          </Text>
          <Color color={product.color} />
          <Text>
            <Span>Size: </Span>
            {product.size}
          </Text>
        </DetailsWrapper>
        <QuantityWrapper as={Col} sm={3}>
          <QuantityForm
            max={product.stock}
            initialValue={product.quantity}
            size={1.5}
            onChange={handleQuantity}
          />
          <Price>$ {(product.price * qty).toFixed(2)}</Price>
        </QuantityWrapper>
      </Row>
    </Body>
  );
}

export default CartProduct;
