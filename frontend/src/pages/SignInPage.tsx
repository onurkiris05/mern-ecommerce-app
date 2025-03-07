import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { Button } from "../components/Button";

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
  transform: translate(-50%, -50%);
  justify-content: center;
  width: min(25rem, 95%);
  background-color: #fff;
  padding: 2rem;
`;

const Link = styled.a`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--clr-1);
  text-transform: uppercase;
  text-align: center;
`;

function SignIn() {
  return (
    <Body>
      <Background src="/assets/images/signin-bg.jpg" />
      <Window>
        <Title>SIGN IN</Title>
        <Form className="d-flex flex-column">
          <Form.Group className="mb-4">
            <Form.Control type="text" placeholder="Username" />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button.Primary className="align-self-center mb-3" size="1.5rem" type="submit">
            Login
          </Button.Primary>
          <Link href="#">Forgot your password?</Link>
          <Link href="#">Create a new account</Link>
        </Form>
      </Window>
    </Body>
  );
}

export default SignIn;
