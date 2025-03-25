import styled from "styled-components";
import {
  CalendarToday,
  MailOutline,
  PermIdentity,
  CheckCircle,
  Cancel,
  ManageAccounts,
} from "@mui/icons-material";
import { useParams } from "react-router-dom";
import * as UserApi from "../api/users";
import { PublicUser } from "../models/user";
import { useEffect, useState } from "react";
import { formatDate } from "../utils";
import { Alert, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { UnauthorizedError } from "../errors/http_errors";
import CustomModal from "../components/CustomModal";
import { Button } from "../components/Button";

const Container = styled.div`
  flex: 1;
  padding: 1.25rem;
`;

const Title = styled.h1``;

const ContentContainer = styled.div`
  display: flex;
  margin-top: 1.25rem;
`;

const Card = styled.div`
  flex: 1;
  padding: 2rem;
  -webkit-box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
`;

const Update = styled.div`
  flex: 2;
  padding: 2rem;
  -webkit-box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
  margin-left: 1.25rem;
`;

const CardTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

const CardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.75rem 0;
  color: #444;
`;

const CardInfoTitle = styled.p`
  margin: 0;
  font-weight: 500;
  color: rgb(175, 170, 170);
`;

const CardInfoDesc = styled.p`
  margin: 0;
  margin-left: 0.5rem;
  color: var(--clr-1);
`;

const UpdateTitle = styled.h2`
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

function UserPage() {
  const { userId } = useParams();
  const [user, setUser] = useState<PublicUser>();
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<UserApi.UserInput>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const [errorText, setErrorText] = useState<string | null>(null);

  async function onSubmit(input: UserApi.UserInput) {
    try {
      const userResponse = await UserApi.updateUser(userId!, input);
      setUser(userResponse);
      setShowModal(true);
    } catch (error) {
      if (error instanceof UnauthorizedError) {
        setErrorText(error.message);
      } else {
        alert(error);
      }
      console.error(error);
    }
  }

  useEffect(() => {
    const getUser = async (id: string) => {
      try {
        const response = await UserApi.getUser(id);
        setUser(response);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    userId && getUser(userId);
  }, [userId]);

  useEffect(() => {
    if (user) {
      reset({
        username: user.username,
        email: user.email,
        password: "",
      });
    }
  }, [user, reset]);

  return (
    <Container>
      <Title>Edit User</Title>
      <ContentContainer>
        <Card>
          <CardTitle>Account Details</CardTitle>
          <CardInfo>
            <CardInfoTitle>
              <PermIdentity /> Username:
            </CardInfoTitle>
            <CardInfoDesc> {user?.username}</CardInfoDesc>
          </CardInfo>
          <CardInfo>
            <CardInfoTitle>
              <MailOutline /> Email:
            </CardInfoTitle>
            <CardInfoDesc> {user?.email}</CardInfoDesc>
          </CardInfo>
          <CardInfo>
            <CardInfoTitle>
              <ManageAccounts /> IsAdmin:
            </CardInfoTitle>
            <CardInfoDesc> {user?.isAdmin ? <CheckCircle /> : <Cancel />}</CardInfoDesc>
          </CardInfo>
          <CardInfo>
            <CardInfoTitle>
              <CalendarToday /> Created At:
            </CardInfoTitle>
            <CardInfoDesc> {user && formatDate(user.createdAt)}</CardInfoDesc>
          </CardInfo>
          <CardInfo>
            <CardInfoTitle>
              <CalendarToday /> Updated At:
            </CardInfoTitle>
            <CardInfoDesc> {user && formatDate(user.updatedAt)}</CardInfoDesc>
          </CardInfo>
        </Card>
        <Update>
          <UpdateTitle>Edit</UpdateTitle>
          <Form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
            {errorText && <Alert variant="danger">{errorText}</Alert>}
            <Form.Group className="mb-4">
              <Form.Label className="me-4">Username: </Form.Label>
              <Form.Control type="text" placeholder="Username" {...register("username")} />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="me-4">Email: </Form.Label>
              <Form.Control type="email" placeholder="Email" {...register("email")} />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="me-4">Password: </Form.Label>
              <Form.Control type="password" placeholder="Password" {...register("password")} />
            </Form.Group>
            <ButtonWrapper>
              <Button.Primary size="1rem" type="submit" disabled={isSubmitting}>
                Update
              </Button.Primary>
            </ButtonWrapper>
          </Form>
        </Update>
      </ContentContainer>
      <CustomModal
        show={showModal}
        onClose={() => setShowModal(false)}
        variant="success"
        title="Success"
        message="User updated successfully!"
      />
    </Container>
  );
}

export default UserPage;
