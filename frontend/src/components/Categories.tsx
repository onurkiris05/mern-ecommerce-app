import categories from "../data/categoryItems";
import CategoryItem from "./CategoryItem";
import { Container, Row, Col } from "react-bootstrap";

function Categories() {
  return (
    <Container fluid className="my-5 px-0">
      <Row className="g-0">
        {categories.map((category) => (
          <Col lg={4} sm={12}>
            <CategoryItem key={category.id} category={category} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Categories;
