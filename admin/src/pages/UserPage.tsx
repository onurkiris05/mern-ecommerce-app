import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";

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
  border-radius: 0.3rem;
  cursor: pointer;
  color: white;
  font-size: 1rem;
`;

const ContentContainer = styled.div`
  display: flex;
  margin-top: 1.25rem;
`;

const Show = styled.div`
  flex: 1;
  padding: 1.25rem;
  -webkit-box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
`;

const Update = styled.div`
  flex: 2;
  padding: 1.25rem;
  -webkit-box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
  margin-left: 1.25rem;
`;

const ShowTop = styled.div`
  display: flex;
  align-items: center;
`;

const ShowImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
`;

const ShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;
`;

const ShowUsername = styled.span`
  font-weight: 600;
`;

const ShowUserTitle = styled.span`
  font-weight: 300;
`;

const ShowBottom = styled.div`
  margin-top: 1.25rem;
`;

const ShowTitle = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: rgb(175, 170, 170);
`;

const ShowInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 1.25rem 0;
  color: #444;
`;

const ShowInfoTitle = styled.span`
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UpdateUpload = styled.div`
  display: flex;
  align-items: center;
`;

const UpdateImg = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 0.5rem;
  object-fit: cover;
  margin-right: 1.25rem;
`;

const UpdateIcon = styled(Publish)`
  cursor: pointer;
`;

const UpdateButton = styled.button`
  border-radius: 0.3rem;
  border: none;
  padding: 0.3rem;
  cursor: pointer;
  background-color: darkblue;
  color: white;
  font-weight: 600;
`;

function UserPage() {
  return (
    <Container>
      <TitleContainer>
        <Title>Edit User</Title>
        <Link to="/newUser">
          <AddButton>Create</AddButton>
        </Link>
      </TitleContainer>
      <ContentContainer>
        <Show>
          <ShowTop>
            <ShowImg
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <ShowTopTitle>
              <ShowUsername>Anna Becker</ShowUsername>
              <ShowUserTitle>Software Engineer</ShowUserTitle>
            </ShowTopTitle>
          </ShowTop>
          <ShowBottom>
            <ShowTitle>Account Details</ShowTitle>
            <ShowInfo>
              <PermIdentity className="userShowIcon" />
              <ShowInfoTitle>annabeck99</ShowInfoTitle>
            </ShowInfo>
            <ShowInfo>
              <CalendarToday className="userShowIcon" />
              <ShowInfoTitle>10.12.1999</ShowInfoTitle>
            </ShowInfo>
            <ShowTitle>Contact Details</ShowTitle>
            <ShowInfo>
              <PhoneAndroid className="userShowIcon" />
              <ShowInfoTitle>+1 123 456 67</ShowInfoTitle>
            </ShowInfo>
            <ShowInfo>
              <MailOutline className="userShowIcon" />
              <ShowInfoTitle>annabeck99@gmail.com</ShowInfoTitle>
            </ShowInfo>
            <ShowInfo>
              <LocationSearching className="userShowIcon" />
              <ShowInfoTitle>New York | USA</ShowInfoTitle>
            </ShowInfo>
          </ShowBottom>
        </Show>
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
