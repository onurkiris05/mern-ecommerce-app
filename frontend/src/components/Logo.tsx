import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface StyleProps {
  size?: string;
}

const LogoFirst = styled.h1<StyleProps>`
  font-size: ${({ size }) => size || "3rem"};
  font-weight: 600;
  font-family: var(--ff-secondary);
  color: var(--clr-3);
`;

const LogoLast = styled.span<StyleProps>`
  font-size: ${({ size }) => size || "3rem"};
  font-weight: 200;
  color: var(--clr-5);
`;

const StyledLink = styled(Link)`
  all: unset;
  display: flex;
  cursor: pointer;
`;

interface LogoProps {
  size?: string;
}

function Logo({ size }: LogoProps) {
  return (
    <Container>
      <StyledLink to="/">
        <LogoFirst size={size}>trend</LogoFirst>
        <LogoLast size={size}>NEST</LogoLast>
      </StyledLink>
    </Container>
  );
}

export default Logo;
