import styled from "styled-components";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { persistor } from "../redux/store";
import { Button } from "./Button";

const Container = styled.div`
  width: 100%;
  height: 5vh;
  padding: 2rem 0;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 0 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.75rem;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin-right: 1rem;
`;

const LogoFirst = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  font-family: var(--ff-secondary);
  color: var(--clr-3);
`;

const LogoLast = styled.span`
  font-size: 3rem;
  font-weight: 200;
  color: var(--clr-5);
`;

const StyledLink = styled(Link)`
  all: unset;
  display: flex;
  cursor: pointer;
`;

function Topbar() {
  const handleLogout = () => {
    persistor.purge();
    window.location.href = "/";
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <StyledLink to="/">
            <LogoFirst>trend</LogoFirst>
            <LogoLast>NEST</LogoLast>
          </StyledLink>
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
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
          />
          <Button.Secondary size="1rem" onClick={handleLogout}>
            Logout
          </Button.Secondary>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Topbar;
