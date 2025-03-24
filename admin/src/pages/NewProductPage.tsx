import styled from "styled-components";

const Container = styled.div`
  flex: 1;
`;

const Title = styled.h1``;

const Form = styled.form`
  margin-top: 1rem;
`;

const Item = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

const Label = styled.label`
  color: gray;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
`;

const Select = styled.select`
  padding: 0.5rem;
`;

const Button = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

function NewProductPage() {
  return (
    <Container>
      <Title>New Product</Title>
      <Form>
        <Item>
          <Label>Image</Label>
          <Input type="file" id="file" />
        </Item>
        <Item>
          <Label>Name</Label>
          <Input type="text" placeholder="Apple Airpods" />
        </Item>
        <Item>
          <Label>Stock</Label>
          <Input type="text" placeholder="123" />
        </Item>
        <Item>
          <Label>Active</Label>
          <Select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
        </Item>
        <Button>Create</Button>
      </Form>
    </Container>
  );
}

export default NewProductPage;
