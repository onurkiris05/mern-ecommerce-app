import { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as UserApi from "../api/users";
import CustomModal from "../components/Modals/CustomModal";
import { Button } from "../components/Button";
import LoadIndicator from "../components/LoadIndicator";

const Container = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  width: clamp(15rem, 25%, 30rem);
  margin: 2rem auto 0;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 2rem 1rem;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

function NewUserPage() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState<UserApi.UserInput>();
  const [errorText, setErrorText] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<UserApi.UserInput>();

  async function onSubmit(input: UserApi.UserInput) {
    setErrorText(null);
    setIsLoading(true);

    try {
      const userResponse = await UserApi.createUser(input);
      setUser(userResponse);
      setShowModal(true);
      reset();
    } catch (error: any) {
      setErrorText(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      {isLoading ? (
        <LoadIndicator message="Creating User..." />
      ) : (
        <Wrapper>
          <Title>New User</Title>
          <Form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
            {errorText && <Alert variant="danger">{errorText}</Alert>}
            <Form.Group className="mb-4">
              <Form.Control
                type="text"
                placeholder="Username"
                isInvalid={!!errors.username}
                {...register("username", { required: "Required" })}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control
                type="email"
                placeholder="Email"
                isInvalid={!!errors.email}
                {...register("email", { required: "Required" })}
              />
              <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control
                type="password"
                placeholder="Password"
                isInvalid={!!errors.password}
                {...register("password", { required: "Required" })}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Button.Primary
              size="1.25rem"
              className="align-self-center"
              type="submit"
              disabled={isSubmitting}
            >
              Create
            </Button.Primary>
          </Form>
        </Wrapper>
      )}
      <CustomModal
        show={showModal}
        onClose={() => setShowModal(false)}
        variant="success"
        title="Success"
        message={
          <span>
            User <strong>{user?.username}</strong> created successfully!
          </span>
        }
      />
    </Container>
  );
}

export default NewUserPage;
