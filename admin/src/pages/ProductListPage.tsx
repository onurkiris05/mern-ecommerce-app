import { useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { productRows } from "../dummyData";

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

const Item = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.5rem;
`;

const Edit = styled.button`
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: var(--clr-2);
  color: white;
  cursor: pointer;
  margin-right: 1.25rem;
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

const ActionWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

function ProductListPage() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params: any) => {
        return (
          <Item>
            <Img src={params.row.img} alt="" />
            {params.row.name}
          </Item>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params: any) => {
        return (
          <ActionWrapper>
            <Link to={"/product/" + params.row.id}>
              <Edit>Edit</Edit>
            </Link>
            <Delete onClick={() => handleDelete(params.row.id)} />
          </ActionWrapper>
        );
      },
    },
  ];

  return (
    <Container>
      <TitleWrapper>
        <Title>Products</Title>
        <Link to="/newProduct">
          <AddButton>Create Product</AddButton>
        </Link>
      </TitleWrapper>
      <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        checkboxSelection
        pageSizeOptions={[5, 10, 25, { value: -1, label: "All" }]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
              page: 0,
            },
          },
        }}
      />
    </Container>
  );
}

export default ProductListPage;
