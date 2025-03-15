import styled from "styled-components";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const Container = styled.div`
  height: 30vh;
  background-color: var(--clr-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  font-family: var(--ff-secondary);
  letter-spacing: 1px;
`;

const Description = styled.p`
  font-size: 1.75rem;
  padding-inline: 1rem;
`;

const InputContainer = styled.form`
  display: flex;
  width: min(30rem, 75%);
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid lightgray;
`;

const SubmitButton = styled.button`
  border: none;
  outline: none;
  color: #fff;
  background-color: var(--clr-2);
  padding: 0.5rem 2rem;

  &:active {
    background-color: var(--clr-5);
  }
`;

function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <SubmitButton type="submit">
          <SendRoundedIcon />
        </SubmitButton>
      </InputContainer>
    </Container>
  );
}

export default Newsletter;
