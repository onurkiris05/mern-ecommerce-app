import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { UserInput } from "../api/users";
import * as UserApi from "../api/users";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { UnauthorizedError } from "../errors/http_errors";
import { Alert } from "react-bootstrap";
import { login } from "../redux/userRedux";
import { useNavigate } from "react-router-dom";

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

const Button = styled.button`
  font-size: 1.5rem;
  background-color: var(--clr-2);
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserInput>();
  const dispatch = useDispatch();
  const [errorText, setErrorText] = useState<string | null>(null);
  const navigate = useNavigate();

  async function onSubmit(input: UserInput) {
    try {
      const userResponse = await UserApi.login(input);
      if (userResponse.isAdmin) {
        dispatch(login(userResponse));
        navigate("/");
      } else {
        throw new UnauthorizedError("You are not an admin!");
      }
    } catch (error) {
      if (error instanceof UnauthorizedError) {
        setErrorText(error.message);
      } else {
        alert(error);
      }
      console.error(error);
    }
  }

  return (
    <Body>
      <Background src="/assets/login-bg.jpg" />
      <Window>
        <Title>ADMIN LOGIN</Title>
        <Form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
          {errorText && <Alert variant="danger">{errorText}</Alert>}
          <Form.Group className="mb-4">
            <Form.Control
              type="text"
              placeholder="Username"
              isInvalid={!!errors.username}
              {...register("username", { required: "Required" })}
            />
            <Form.Control.Feedback type="invalid">{errors.username?.message}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              type="password"
              placeholder="Password"
              isInvalid={!!errors.password}
              {...register("password", { required: "Required" })}
            />
            <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
          </Form.Group>
          <Button type="submit" disabled={isSubmitting}>
            Login
          </Button>
        </Form>
      </Window>
    </Body>
  );
}

export default LoginPage;
