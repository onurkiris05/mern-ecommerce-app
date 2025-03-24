import styled from "styled-components";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@mui/icons-material";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";

const Container = styled.div`
  flex: 1;
  padding: 1.25rem;
`;

const Title = styled.h1``;

const ContentContainer = styled.div`
  display: flex;
  margin-top: 1.25rem;
`;

const Card = styled.div`
  flex: 1;
  padding: 2rem;
  -webkit-box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
`;

const Update = styled.div`
  flex: 2;
  padding: 2rem;
  -webkit-box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
  margin-left: 1.25rem;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
`;

const CardImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
`;

const CardTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;
`;

const CardUsername = styled.span`
  font-weight: 600;
`;

const CardUserTitle = styled.span`
  font-weight: 300;
`;

const CardTitle = styled.h3`
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: rgb(175, 170, 170);
`;

const CardInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  color: #444;
`;

const CardInfoTitle = styled.span`
  margin-left: 0.5rem;
`;

const UpdateTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;

const UpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;
`;

const UpdateLeft = styled.div``;

const UpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
`;

const UpdateLabel = styled.label`
  margin-bottom: 0.3rem;
  font-size: 1rem;
`;

const UpdateInput = styled.input`
  border: none;
  width: 15rem;
  height: 2rem;
  border-bottom: 1px solid gray;
`;

const UpdateRight = styled.div`
  margin-right: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UpdateUpload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const UpdateImg = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 0.5rem;
  object-fit: cover;
`;

const UpdateIcon = styled(ImageSearchIcon)`
  cursor: pointer;
`;

const UpdateButton = styled.button`
  border-radius: 0.3rem;
  border: none;
  padding: 0.3rem;
  cursor: pointer;
  background-color: var(--clr-2);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  transition: 0.2s;

  &:hover {
    background-color: var(--clr-1);
  }
`;

function UserPage() {
  return (
    <Container>
      <Title>Edit User</Title>
      <ContentContainer>
        <Card>
          <CardHeader>
            <CardImg
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <CardTopTitle>
              <CardUsername>Anna Becker</CardUsername>
              <CardUserTitle>Software Engineer</CardUserTitle>
            </CardTopTitle>
          </CardHeader>
          <CardTitle>Account Details</CardTitle>
          <CardInfo>
            <PermIdentity />
            <CardInfoTitle>annabeck99</CardInfoTitle>
          </CardInfo>
          <CardInfo>
            <CalendarToday />
            <CardInfoTitle>10.12.1999</CardInfoTitle>
          </CardInfo>
          <CardTitle>Contact Details</CardTitle>
          <CardInfo>
            <PhoneAndroid />
            <CardInfoTitle>+1 123 456 67</CardInfoTitle>
          </CardInfo>
          <CardInfo>
            <MailOutline />
            <CardInfoTitle>annabeck99@gmail.com</CardInfoTitle>
          </CardInfo>
          <CardInfo>
            <LocationSearching />
            <CardInfoTitle>New York | USA</CardInfoTitle>
          </CardInfo>
        </Card>
        <Update>
          <UpdateTitle>Edit</UpdateTitle>
          <UpdateForm>
            <UpdateLeft>
              <UpdateItem>
                <UpdateLabel>Username</UpdateLabel>
                <UpdateInput type="text" placeholder="annabeck99" />
              </UpdateItem>
              <UpdateItem>
                <UpdateLabel>Full Name</UpdateLabel>
                <UpdateInput type="text" placeholder="Anna Becker" />
              </UpdateItem>
              <UpdateItem>
                <UpdateLabel>Email</UpdateLabel>
                <UpdateInput type="text" placeholder="annabeck99@gmail.com" />
              </UpdateItem>
              <UpdateItem>
                <UpdateLabel>Phone</UpdateLabel>
                <UpdateInput type="text" placeholder="+1 123 456 67" />
              </UpdateItem>
              <UpdateItem>
                <UpdateLabel>Address</UpdateLabel>
                <UpdateInput type="text" placeholder="New York | USA" />
              </UpdateItem>
            </UpdateLeft>
            <UpdateRight>
              <UpdateUpload>
                <UpdateImg
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <UpdateIcon />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </UpdateUpload>
              <UpdateButton>Update</UpdateButton>
            </UpdateRight>
          </UpdateForm>
        </Update>
      </ContentContainer>
    </Container>
  );
}

export default UserPage;
