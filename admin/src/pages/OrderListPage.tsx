import { useEffect, useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline, EditOutlined, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { formatDate } from "../utils";
import { Button } from "../components/Button";
import CustomModal from "../components/Modals/CustomModal";
import * as OrderApi from "../api/orders";
import { Order } from "../models/order";
import ConfirmModal from "../components/Modals/ConfirmModal";

const Container = styled.div`
  flex: 1;
  height: 100%;
`;

const Title = styled.h1`
  margin: 0 1rem;
  padding: 2rem 0 1rem;
`;

const Text = styled.p``;

const ActionWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

function OrderListPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await OrderApi.getAllOrders();
        setOrders(res);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  const handleDeleteClick = (id: string) => {
    setSelectedOrderId(id);
    setShowConfirmModal(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedOrderId) return;
    try {
      await OrderApi.deleteOrder(selectedOrderId);
      setOrders(orders.filter((order) => order._id !== selectedOrderId));
      setShowConfirmModal(false);
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const columns = [
    { field: "_id", headerName: "Order ID", width: 90 },
    { field: "userId", headerName: "User ID", width: 90 },
    {
      field: "products",
      headerName: "Products",
      width: 100,
      renderCell: (params: any) => {
        return (
          <Link to={"/order/" + params.row._id}>
            <Button.Icon color="royalblue">
              <Search />
            </Button.Icon>
          </Link>
        );
      },
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 90,
      renderCell: (params: any) => {
        return `$${params.row.amount}`;
      },
    },
    {
      field: "address",
      headerName: "Address",
      width: 150,
      renderCell: (params: any) => {
        const addressValues = Object.values(params.row.address);
        return (
          <Text>
            {addressValues.map((value, i) => (
              <span key={i}>
                {value as string}
                {i !== addressValues.length - 1 ? ", " : ""}
              </span>
            ))}
          </Text>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params: any) => {
        return (
          <ButtonWrapper>
            <Button.Status status={params.row.status}>{params.row.status}</Button.Status>
          </ButtonWrapper>
        );
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
            <Link to={"/order/" + params.row._id}>
              <Button.Icon color="royalblue">
                <EditOutlined />
              </Button.Icon>
            </Link>
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
      <Title>Orders</Title>
      <DataGrid
        rows={orders}
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
        message="Are you sure you want to delete this order? This action cannot be undone."
        yesText="Delete"
        noText="Cancel"
      />

      {/* Success Modal */}
      <CustomModal
        show={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        variant="success"
        title="Success"
        message="Order deleted successfully!"
      />
    </Container>
  );
}

export default OrderListPage;
