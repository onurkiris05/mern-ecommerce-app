import styled from "styled-components";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { Container } from "react-bootstrap";

const Title = styled.h2`
  font-size: 1.75rem;
  font-family: var(--ff-secondary);
  letter-spacing: 1px;
`;

const Info = styled.div`
  display: flex;
  gap: 1rem;
`;

const Text = styled.p`
  font-weight: 500;
`;

function Contact() {
  return (
    <Container className="d-flex flex-column align-items-center align-items-sm-start mt-4 mt-sm-0">
      <Title className="mb-sm-4">Contact</Title>
      <Info>
        <LocationOnIcon />
        <Text>1234 Random Address, City, Country</Text>
      </Info>
      <Info>
        <LocalPhoneIcon />
        <Text>+1 234 56 78</Text>
      </Info>
      <Info>
        <EmailIcon />
        <Text>onurkiris@gmail.com</Text>
      </Info>
    </Container>
  );
}

export default Contact;
