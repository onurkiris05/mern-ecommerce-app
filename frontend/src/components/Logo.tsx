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

interface LogoProps {
  size?: string;
}

function Logo({ size }: LogoProps) {
  return (
    <Container>
      <LogoFirst size={size}>trend</LogoFirst>
      <LogoLast size={size}>NEST</LogoLast>
    </Container>
  );
}

export default Logo;
