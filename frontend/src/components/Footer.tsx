import { Col, Container, Row } from "react-bootstrap";
import Social from "./Social";
import UsefulLinks from "./UsefulLinks";
import Contact from "./Contact";

function Footer() {
  return (
    <Container fluid className="py-3 pt-sm-5">
      <Row>
        <Col sm={4} className="order-last order-sm-first">
          <Social />
        </Col>
        <Col sm={4}>
          <UsefulLinks />
        </Col>
        <Col sm={4} className="order-first order-sm-last">
          <Contact />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
