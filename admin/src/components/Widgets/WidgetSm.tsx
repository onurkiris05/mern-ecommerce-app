import styled from "styled-components";
import { Visibility } from "@mui/icons-material";
import { members } from "../../dummyData";

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
  margin: 1.25rem 0;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

const Username = styled.span`
  font-weight: 600;
`;

const UserTitle = styled.span`
  font-weight: 300;
`;

const Img = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
  margin-left: auto;
`;

const Icon = styled(Visibility)`
  font-size: 1rem !important;
  margin-right: 0.3rem;
`;

function WidgetSm() {
  return (
    <Container>
      <Title>New Join Members</Title>
      <List>
        {members.map((member, i) => (
          <ListItem key={i}>
            <Img src={member.imgSrc} alt="" />
            <User>
              <Username>{member.username}</Username>
              <UserTitle>{member.title}</UserTitle>
            </User>
            <Button>
              <Icon />
              Display
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default WidgetSm;
