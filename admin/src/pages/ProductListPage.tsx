import { useEffect, useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Product } from "../models/product";
import * as ProductApi from "../api/products";
import { formatDate } from "../utils";
import { Button } from "../components/Button";
import CustomModal from "../components/CustomModal";

const Container = styled.div`
  flex: 1;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 0 1rem;
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

const ActionWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
  const [showModal, setShowModal] = useState(false);

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
      setShowModal(true);
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
              <Button.Icon>
                <EditOutlined />
              </Button.Icon>
            </Link>
            <Button.Icon color="red" onClick={() => handleDelete(params.row._id)}>
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
        <Title>Products</Title>
        <Link to="/newProduct">
          <Button.Primary size="1rem">Create Product</Button.Primary>
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
      <CustomModal
        show={showModal}
        onClose={() => setShowModal(false)}
        variant="success"
        title="Success"
        message="Product deleted successfully!"
      />
    </Container>
  );
}

export default ProductListPage;
