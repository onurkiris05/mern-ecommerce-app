import products from "../data/productItems";
import ProductItem from "./ProductItem";
import { Col, Container, Row } from "react-bootstrap";

function Products() {
  return (
    <Container fluid className="my-4">
      <Row className="g-4">
        {products.map((product) => (
          <Col lg={3} md={4} sm={6} xs={12}>
            <ProductItem key={product.id} product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
