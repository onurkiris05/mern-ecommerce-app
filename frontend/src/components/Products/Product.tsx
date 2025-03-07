import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import ColorForm from "../Forms/ColorForm";
import SelectForm from "../Forms/SelectForm";
import QuantityForm from "../Forms/QuantityForm";

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

const ProductForm = styled.form``;

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

const colors = ["black", "red", "teal", "yellow"];

const sizes = [
  { label: "X-Large", value: "xlarge" },
  { label: "Large", value: "large" },
  { label: "Medium", value: "medium" },
  { label: "Small", value: "small" },
];

function SingleProduct() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Image src="/assets/images/product-1.png" />
        </Col>
        <Col md={6}>
          <Container className="d-flex flex-column align-items-center align-items-md-start py-5 p-md-5">
            <Title>Coal Tshirt</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus nesciunt ullam,
              blanditiis architecto autem?
            </Desc>
            <Price>$ 20.00</Price>
            <ProductForm>
              <Container className="d-flex flex-wrap gap-2 gap-md-5 mb-4 justify-content-center justify-content-md-start">
                <Attribute>
                  <Text>Color: </Text>
                  <ColorForm colors={colors} size={2} onChange={() => {}} />
                </Attribute>
                <Attribute>
                  <Text>Size: </Text>
                  <SelectForm label="Size" menuItems={sizes} OnChange={() => {}} />
                </Attribute>
              </Container>
              <Container className="d-flex flex-wrap gap-3 gap-md-5 justify-content-center justify-content-md-start">
                <QuantityForm size={2} max={10} onChange={() => {}} />
                <AddCartButton type="submit">ADD TO CART</AddCartButton>
              </Container>
            </ProductForm>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default SingleProduct;
