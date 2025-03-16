import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Logo from "./Logo";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
  width: 100%;
  border: none;
  outline: none;
`;

const MenuItem = styled.div`
  font-size: 1rem;
  margin-right: 1rem;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  all: unset;
  display: flex;
  cursor: pointer;
`;

function Header() {
  const quantity = useSelector((state: any) => state.cart.quantity);

  return (
    <Container fluid className=" py-3">
      <Row className="d-flex justify-content-between align-items-center">
        <Col
          sm={6}
          md={4}
          className="d-flex justify-content-center justify-content-md-start align-items-center gap-2 py-2 py-sm-0"
        >
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: "1.25rem" }} />
          </SearchContainer>
        </Col>
        <Col md={4} className="order-first order-md-0">
          <Logo />
        </Col>
        <Col
          sm={6}
          md={4}
          className="d-flex justify-content-center justify-content-md-end py-2 py-sm-0"
        >
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <StyledLink to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </StyledLink>
          </MenuItem>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
