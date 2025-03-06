import styled from "styled-components";
import Logo from "./Logo";
import { Container } from "react-bootstrap";

const Description = styled.p``;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  font-size: 2rem;
  color: var(--clr-1);
`;

function Social() {
  return (
    <Container className="d-flex flex-column align-items-sm-start my-4 my-sm-0">
      <Logo />
      <Description>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est alias maxime, beatae aut
        corrupti perferendis, reiciendis sequi, distinctio voluptates libero hic. Aspernatur tempore
        nobis, pariatur veritatis repellendus placeat quia assumenda?
      </Description>
      <SocialContainer>
        <SocialIcon href="#">
          <i className="bi bi-facebook"></i>
        </SocialIcon>
        <SocialIcon href="#">
          <i className="bi bi-instagram"></i>
        </SocialIcon>
        <SocialIcon href="#">
          <i className="bi bi-youtube"></i>
        </SocialIcon>
        <SocialIcon href="#">
          <i className="bi bi-pinterest"></i>
        </SocialIcon>
      </SocialContainer>
    </Container>
  );
}

export default Social;
