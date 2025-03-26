import styled from "styled-components";
import { Order } from "../../models/order";
import { useEffect, useState } from "react";
import * as OrderApi from "../../api/orders";
import { formatDate } from "../../utils";
import { DataGrid } from "@mui/x-data-grid";

const Container = styled.div`
  flex: 2;
  box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
  padding: 1.25rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
`;

const Text = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
`;

const Bold = styled.p`
  font-weight: 500;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Button = styled.button<{ type: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  padding: 0 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.type === "approved" ? "#e5faf2" : props.type === "declined" ? "#fff0f1" : "#ebf1fe"};
  color: ${(props) =>
    props.type === "approved" ? "#3bb077" : props.type === "declined" ? "#d95087" : "#2a7ade"};
`;

function WidgetLg() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await OrderApi.getAllOrders();
        setOrders(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOrders();
  }, []);

  const columns = [
    { field: "_id", headerName: "Order ID", width: 250 },
    {
      field: "createdAt",
      headerName: "Date",
      width: 200,
      renderCell: (params: any) => {
        return <Text>{formatDate(params.row.createdAt)}</Text>;
      },
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 100,
      renderCell: (params: any) => {
        return <Bold>{`$${params.row.amount}`}</Bold>;
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      renderCell: (params: any) => {
        return (
          <ButtonWrapper>
            <Button type={params.row.status}>{params.row.status}</Button>
          </ButtonWrapper>
        );
      },
    },
  ];

  return (
    <Container>
      <Title>Latest transactions</Title>
      <DataGrid
        rows={orders}
        getRowId={(row) => row._id}
        disableRowSelectionOnClick
        columns={columns}
        pageSizeOptions={[5, 10, 25, { value: -1, label: "All" }]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
              page: 0,
            },
          },
        }}
      />
      {/* <Table>
        <thead>
          <tr>
            <Th>Order ID</Th>
            <Th>Date</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <Row key={order._id}>
              <Data>{order._id}</Data>
              <Data>{formatDate(order.createdAt)}</Data>
              <Data>
                <strong>${order.amount}</strong>
              </Data>
              <Data>
                <Button type={order.status}>{order.status}</Button>
              </Data>
            </Row>
          ))}
        </tbody>
      </Table> */}
    </Container>
  );
}

export default WidgetLg;
