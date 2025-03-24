import styled from "styled-components";

const Container = styled.div`
  flex: 1;
`;

const Title = styled.h1``;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  margin-right: 1.25rem;
`;

const Label = styled.label`
  margin-bottom: 0.8rem;
  font-size: 1rem;
  font-weight: 600;
  color: rgb(151, 150, 150);
`;

const Input = styled.input`
  height: 1.25rem;
  padding: 0.5rem;
  border: 1px solid gray;
  border-radius: 0.5rem;
`;

const GenderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const GenderLabel = styled.label`
  margin: 0.5rem;
  font-size: 1.25rem;
  color: #555;
`;

const Select = styled.select`
  height: 2.5rem;
  border-radius: 0.5rem;
`;

const Button = styled.button`
  width: 12rem;
  border: none;
  background-color: darkblue;
  color: white;
  padding: 0.5rem;
  font-weight: 600;
  border-radius: 0.5rem;
  margin-top: 2rem;
  cursor: pointer;
`;

function NewUserPage() {
  return (
    <Container>
      <Title>New User</Title>
      <Form>
        <Item>
          <Label>Username</Label>
          <Input type="text" placeholder="john" />
        </Item>
        <Item>
          <Label>Full Name</Label>
          <Input type="text" placeholder="John Smith" />
        </Item>
        <Item>
          <Label>Email</Label>
          <Input type="email" placeholder="john@gmail.com" />
        </Item>
        <Item>
          <Label>Password</Label>
          <Input type="password" placeholder="password" />
        </Item>
        <Item>
          <Label>Phone</Label>
          <Input type="text" placeholder="+1 123 456 78" />
        </Item>
        <Item>
          <Label>Address</Label>
          <Input type="text" placeholder="New York | USA" />
        </Item>
        <Item>
          <Label>Gender</Label>
          <GenderContainer>
            <Input type="radio" name="gender" id="male" value="male" />
            <GenderLabel htmlFor="male">Male</GenderLabel>
            <Input type="radio" name="gender" id="female" value="female" />
            <GenderLabel htmlFor="female">Female</GenderLabel>
            <Input type="radio" name="gender" id="other" value="other" />
            <GenderLabel htmlFor="other">Other</GenderLabel>
          </GenderContainer>
        </Item>
        <Item>
          <Label>Active</Label>
          <Select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
        </Item>
        <Button type="submit">Create</Button>
      </Form>
    </Container>
  );
}

export default NewUserPage;
