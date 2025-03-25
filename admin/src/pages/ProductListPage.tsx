import { useEffect, useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Product } from "../models/product";
import * as ProductApi from "../api/products";
import { formatDate } from "../utils";

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
  height: 100%;
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
  font-size: 1rem;
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

const Color = styled.div<{ color: string }>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid var(--clr-1);
  background-color: ${(props) => props.color};
`;

function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsResponse = await ProductApi.getAllProducts();
        setProducts(productsResponse);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await ProductApi.deleteProduct(id);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params: any) => {
        return (
          <Item>
            <Img src={params.row.img} alt="" />
            {params.row.title}
          </Item>
        );
      },
    },
    {
      field: "categories",
      headerName: "Categories",
      width: 100,
      renderCell: (params: any) => {
        return <Item>{params.row.categories?.join(", ")}</Item>;
      },
    },
    {
      field: "genders",
      headerName: "Genders",
      width: 100,
      renderCell: (params: any) => {
        return <Item>{params.row.genders?.join(", ")}</Item>;
      },
    },
    {
      field: "sizes",
      headerName: "Sizes",
      width: 100,
      renderCell: (params: any) => {
        return <Item>{params.row.sizes?.join(", ")}</Item>;
      },
    },
    {
      field: "colors",
      headerName: "Colors",
      width: 150,
      renderCell: (params: any) => {
        return (
          <Item>
            {params.row.colors?.map((color: string, i: number) => (
              <Color key={i} color={color} />
            ))}
          </Item>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
      renderCell: (params: any) => {
        return `$${params.row.price}`;
      },
    },
    { field: "stock", headerName: "Stock", width: 100 },
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
            <Link to={"/product/" + params.row._id}>
              <Edit>Edit</Edit>
            </Link>
            <Delete onClick={() => handleDelete(params.row._id)} />
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
        rows={products}
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

export default ProductListPage;
