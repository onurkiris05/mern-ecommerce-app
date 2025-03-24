import { useEffect, useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { PublicUser } from "../models/user";
import * as UsersApi from "../api/users";
import { DeleteOutline } from "@mui/icons-material";

const Container = styled.div`
  flex: 1;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0 1rem;
`;

const ActionWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Edit = styled.button`
  border: none;
  padding: 0.3rem 0.5rem;
  background-color: var(--clr-2);
  color: white;
  cursor: pointer;
  margin-right: 1rem;
  transition: 0.2s;
  font-size: 1rem;

  &:hover {
    background-color: var(--clr-1);
  }
`;

const Delete = styled(DeleteOutline)`
  color: red;
  cursor: pointer;
`;

const AddButton = styled.button`
  border: none;
  padding: 0.4rem 0.75rem;
  margin: 1rem;
  background-color: var(--clr-3);
  border-radius: 0.3rem;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  transition: 0.2s;

  &:hover {
    background-color: var(--clr-1);
  }
`;

const StyledLink = styled(Link)`
  all: unset;
  display: flex;
  cursor: pointer;
`;

function UserListPage() {
  const [users, setUsers] = useState<PublicUser[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersResponse = await UsersApi.getAllUsers();
        setUsers(usersResponse);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await UsersApi.deleteUser(id);
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "Username",
      width: 200,
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "isAdmin",
      headerName: "Is Admin",
      width: 120,
      renderCell: (params: any) => {
        return <>{params.row.isAdmin ? "Yes" : "No"}</>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params: any) => {
        return (
          <ActionWrapper>
            <StyledLink to={"/user/" + params.row._id}>
              <Edit>Edit</Edit>
            </StyledLink>
            <Delete onClick={() => handleDelete(params.row._id)} />
          </ActionWrapper>
        );
      },
    },
  ];

  return (
    <Container>
      <TitleWrapper>
        <Title>Users</Title>
        <Link to="/newUser">
          <AddButton>Create User</AddButton>
        </Link>
      </TitleWrapper>
      <DataGrid
        rows={users}
        getRowId={(row) => row._id}
        disableRowSelectionOnClick
        columns={columns}
        checkboxSelection
        pageSizeOptions={[5, 10, 25, { value: -1, label: "All" }]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
              page: 0,
            },
          },
        }}
      />
    </Container>
  );
}

export default UserListPage;
