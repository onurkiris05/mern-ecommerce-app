import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Logo from "./Logo";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
`;

// LEFT CONTAINER
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Language = styled.span`
  font-size: 1rem;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  padding: 0.5rem;
`;

const Input = styled.input`
  border: none;

  &:focus {
    outline: none;
  }
`;

// CENTER CONTAINER
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// RIGHT CONTAINER
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 1rem;
  margin-right: 1rem;
  cursor: pointer;
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: "1.25rem" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo />
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
