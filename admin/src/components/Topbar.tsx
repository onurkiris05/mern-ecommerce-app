import styled from "styled-components";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  height: 3rem;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 0 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.span`
  font-weight: bold;
  font-size: 2rem;
  color: darkblue;
  cursor: pointer;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 0.5rem;
  color: #555;
`;

const IconBadge = styled.span`
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: -0.5rem;
  right: 0;
  background-color: red;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.5rem;
`;

const Avatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
`;

function Topbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>trendNEST</Logo>
        </Left>
        <Right>
          <IconContainer>
            <NotificationsNone />
            <IconBadge>2</IconBadge>
          </IconContainer>
          <IconContainer>
            <Language />
            <IconBadge>2</IconBadge>
          </IconContainer>
          <IconContainer>
            <Settings />
          </IconContainer>
          <Avatar
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Topbar;
