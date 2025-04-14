import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { UserLoginInput } from "../api/users";
import * as UserApi from "../api/users";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { UnauthorizedError } from "../errors/http_errors";
import { Alert } from "react-bootstrap";
import { login } from "../redux/userRedux";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import CustomModal from "../components/Modals/CustomModal";

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

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserLoginInput>();
  const dispatch = useDispatch();
  const [errorText, setErrorText] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  async function onSubmit(input: UserLoginInput) {
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
      <CustomModal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Test Account"
        message="Username: Admin / Password: 1234"
      />
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
          <Button.Primary size="1.5rem" type="submit" disabled={isSubmitting}>
            Login
          </Button.Primary>
        </Form>
      </Window>
    </Body>
  );
}

export default LoginPage;
