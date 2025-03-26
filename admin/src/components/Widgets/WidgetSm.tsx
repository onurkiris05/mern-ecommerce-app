import styled from "styled-components";
import { Visibility } from "@mui/icons-material";
import { useEffect, useState } from "react";
import * as UserApi from "../../api/users";
import { PublicUser } from "../../models/user";
import { Link } from "react-router-dom";
import { Button } from "../Button";

const Container = styled.div`
  flex: 1;
  box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
  padding: 1.25rem;
  margin-right: 1.25rem;
`;

const Title = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1.25rem 0;
`;

const UserWrapper = styled.div`
  display: flex;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

const Username = styled.span`
  font-weight: 600;
`;

const Email = styled.span`
  font-weight: 300;
`;

const Img = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
`;

const StyledLink = styled(Link)`
  all: unset;
  display: flex;
  cursor: pointer;
`;

function WidgetSm() {
  const [latestUsers, setLatestUsers] = useState<PublicUser[]>([]);

  useEffect(() => {
    const fetchLatestUsers = async () => {
      try {
        const response = await UserApi.getAllUsers(true);
        setLatestUsers(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLatestUsers();
  }, []);

  return (
    <Container>
      <Title>New Join Members</Title>
      <List>
        {latestUsers.map((user) => (
          <ListItem key={user._id}>
            <UserWrapper>
              <Img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
              <User>
                <Username>{user.username}</Username>
                <Email>{user.email}</Email>
              </User>
            </UserWrapper>
            <StyledLink to={"/user/" + user._id}>
              <Button.Primary size="0.8rem">
                <Visibility />
                Display
              </Button.Primary>
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default WidgetSm;
