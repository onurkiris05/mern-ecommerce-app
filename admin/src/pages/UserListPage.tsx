import { useEffect, useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { PublicUser } from "../models/user";
import * as UsersApi from "../api/users";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { formatDate } from "../utils";
import { Button } from "../components/Button";
import CustomModal from "../components/Modals/CustomModal";
import ConfirmModal from "../components/Modals/ConfirmModal";

const Container = styled.div`
  flex: 1;
  height: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 0 1rem;
`;

const Title = styled.h1`
  margin: 0 1rem;
`;

const ActionWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledLink = styled(Link)`
  all: unset;
  display: flex;
  cursor: pointer;
`;

function UserListPage() {
  const [users, setUsers] = useState<PublicUser[]>([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

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

  const handleDeleteClick = (id: string) => {
    setSelectedUserId(id);
    setShowConfirmModal(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedUserId) return;
    try {
      await UsersApi.deleteUser(selectedUserId);
      setUsers(users.filter((user) => user._id !== selectedUserId));
      setShowConfirmModal(false);
      setShowSuccessModal(true);
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
      field: "createdAt",
      headerName: "CreatedAt",
      width: 180,
      renderCell: (params: any) => {
        return formatDate(params.row.createdAt);
      },
    },
    {
      field: "updatedAt",
      headerName: "UpdatedAt",
      width: 180,
      renderCell: (params: any) => {
        return formatDate(params.row.updatedAt);
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
              <Button.Icon>
                <EditOutlined />
              </Button.Icon>
            </StyledLink>
            <Button.Icon color="red" onClick={() => handleDeleteClick(params.row._id)}>
              <DeleteOutline />
            </Button.Icon>
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
          <Button.Primary size="1rem">Create User</Button.Primary>
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

      {/* Confirmation Modal */}
      <ConfirmModal
        show={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={handleConfirmDelete}
        title="Confirm Deletion"
        message="Are you sure you want to delete this user? This action cannot be undone."
        yesText="Delete"
        noText="Cancel"
      />

      {/* Success Modal */}
      <CustomModal
        show={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        variant="success"
        title="Success"
        message="User deleted successfully!"
      />
    </Container>
  );
}

export default UserListPage;
