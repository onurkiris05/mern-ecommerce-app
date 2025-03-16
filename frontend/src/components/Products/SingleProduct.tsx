import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import ColorForm from "../Forms/ColorForm";
import SelectForm from "../Forms/SelectForm";
import QuantityForm from "../Forms/QuantityForm";
import { Product } from "../../models/product";
import { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

const ProductContainer = styled(Container)`
  min-height: 60vh;
  padding: 5rem 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  font-weight: 200;
  font-size: 3rem;
`;

const Desc = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
`;

const Price = styled.p`
  font-size: 3rem;
  font-weight: 200;
`;

const Attribute = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const AddCartButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.25rem;
  background: none;
  border: 2px solid var(--clr-3);
  transition: 0.3s;

  &:hover {
    background: #f1f1f1;
  }

  &:active {
    background: var(--clr-5);
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
`;

function SingleProduct({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  function handleQuantity(qty: number) {
    setQuantity(qty);
  }

  function handleColor(color: string) {
    setColor(color);
  }

  function handleSize(e: SelectChangeEvent<string | number>) {
    setSize(e.target.value as string);
  }

  const handleAddToCart = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <ProductContainer>
      <Row>
        <Col md={6}>
          <Image src={product.img} />
        </Col>
        <Col md={6}>
          <Container className="d-flex flex-column align-items-center align-items-md-start py-5 p-md-5">
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price>{`$ ${product.price}`}</Price>
            <Container className="d-flex flex-wrap gap-2 gap-md-5 mb-4 justify-content-center justify-content-md-start">
              <Attribute>
                <Text>Color: </Text>
                <ColorForm name="color" colors={product.colors} size={2} onChange={handleColor} />
              </Attribute>
              <Attribute>
                <Text>Size: </Text>
                <SelectForm
                  label="Size"
                  name="size"
                  menuItems={product.sizes?.map((size) => ({ value: size, label: size }))}
                  OnChange={handleSize}
                />
              </Attribute>
            </Container>
            <Container className="d-flex flex-wrap gap-3 gap-md-5 justify-content-center justify-content-md-start">
              <QuantityForm size={2} max={product.stock} onChange={handleQuantity} />
              <AddCartButton onClick={handleAddToCart}>ADD TO CART</AddCartButton>
            </Container>
          </Container>
        </Col>
      </Row>
    </ProductContainer>
  );
}

export default SingleProduct;
