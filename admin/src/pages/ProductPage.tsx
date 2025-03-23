import styled from "styled-components";
import { Link } from "react-router-dom";
import Chart from "../components/Chart";
import { productData } from "../dummyData";
import { Publish } from "@mui/icons-material";

const Container = styled.div`
  flex: 4;
  padding: 1.25rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1``;

const AddButton = styled.button`
  width: 5rem;
  border: none;
  padding: 0.3rem;
  background-color: teal;
  color: white;
  border-radius: 0.3rem;
  font-size: 1rem;
  cursor: pointer;
`;

const TopContainer = styled.div`
  display: flex;
`;

const TopLeft = styled.div`
  flex: 1;
`;

const TopRight = styled.div`
  flex: 1;
  padding: 1.25rem;
  margin: 1.25rem;
  -webkit-box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
`;

const InfoImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1.25rem;
`;

const InfoTop = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.span`
  font-weight: 600;
`;

const InfoBottom = styled.div`
  margin-top: 0.5rem;
`;

const InfoItem = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
`;

const InfoValue = styled.span`
  font-weight: 300;
`;

const BottomContainer = styled.div`
  padding: 1.25rem;
  margin: 1.25rem;
  -webkit-box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

const FormLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  color: gray;
`;

const Input = styled.input`
  margin-bottom: 0.5rem;
  border: none;
  padding: 0.5rem;
  border-bottom: 1px solid gray;
`;

const Select = styled.select`
  margin-bottom: 0.5rem;
`;

const FormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Upload = styled.div`
  display: flex;
  align-items: center;
`;

const UploadImg = styled.img`
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 0.5rem;
  object-fit: cover;
  margin-right: 1.25rem;
`;

const Button = styled.button`
  border: none;
  padding: 0.3rem;
  border-radius: 0.3rem;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

function ProductPage() {
  return (
    <Container>
      <TitleContainer>
        <Title>Product</Title>
        <Link to="/newproduct">
          <AddButton>Create</AddButton>
        </Link>
      </TitleContainer>
      <TopContainer>
        <TopLeft>
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </TopLeft>
        <TopRight>
          <InfoTop>
            <InfoImg
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <Name>Apple Airpods</Name>
          </InfoTop>
          <InfoBottom>
            <InfoItem>
              <span>id:</span>
              <InfoValue>123</InfoValue>
            </InfoItem>
            <InfoItem>
              <span>sales:</span>
              <InfoValue>5123</InfoValue>
            </InfoItem>
            <InfoItem>
              <span>active:</span>
              <InfoValue>yes</InfoValue>
            </InfoItem>
            <InfoItem>
              <span>in stock:</span>
              <InfoValue>no</InfoValue>
            </InfoItem>
          </InfoBottom>
        </TopRight>
      </TopContainer>
      <BottomContainer>
        <Form>
          <FormLeft>
            <Label>Product Name</Label>
            <Input type="text" placeholder="Apple AirPod" />
            <Label>In Stock</Label>
            <Select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Select>
            <Label>Active</Label>
            <Select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Select>
          </FormLeft>
          <FormRight>
            <Upload>
              <UploadImg
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </Upload>
            <Button>Update</Button>
          </FormRight>
        </Form>
      </BottomContainer>
    </Container>
  );
}

export default ProductPage;
