import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { Button } from "../components/Button";
import { Col, Row } from "react-bootstrap";

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Background = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Window = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: min(40rem, 95%);
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 2rem;
`;

function RegisterPage() {
  return (
    <Body>
      <Background src="/assets/images/register-bg.jpg" />
      <Window>
        <Title>CREATE AN ACCOUNT</Title>
        <Form className="d-flex flex-column">
          <Row className="mb-3 gap-3 gap-sm-0">
            <Form.Group as={Col} sm="6">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group as={Col} sm="6">
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
          </Row>
          <Row className="mb-3 gap-3 gap-sm-0">
            <Form.Group as={Col} sm="6">
              <Form.Control type="text" placeholder="Username" />
            </Form.Group>
            <Form.Group as={Col} sm="6">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
          </Row>
          <Row className="mb-3 gap-3 gap-sm-0">
            <Form.Group as={Col} sm="6">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group as={Col} sm="6">
              <Form.Control type="password" placeholder="Confirm password" />
            </Form.Group>
          </Row>
          <Row className="mb-4 gap-3 gap-sm-0">
            <Form.Group>
              <Form.Check className="d-inline me-2" type="checkbox" />
              <Form.Text>
                By creating an account you agree to our <a href="/">Terms & Conditions</a>
              </Form.Text>
            </Form.Group>
          </Row>
          <Button.Primary className="align-self-center" size="1.5rem" type="submit">
            Register
          </Button.Primary>
        </Form>
      </Window>
    </Body>
  );
}

export default RegisterPage;
