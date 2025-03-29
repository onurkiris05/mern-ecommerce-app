import { useEffect, useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Product } from "../models/product";
import * as ProductApi from "../api/products";
import * as CloudinaryApi from "../api/cloudinary";
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
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [selectedProductImageUrl, setSelectedProductImageUrl] = useState<string | null>(null);

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

  const handleDeleteClick = (id: string, imgUrl: string) => {
    setSelectedProductId(id);
    setSelectedProductImageUrl(imgUrl);
    setShowConfirmModal(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedProductId) return;
    if (!selectedProductImageUrl) return;

    try {
      await ProductApi.deleteProduct(selectedProductId);
      await CloudinaryApi.deleteImage(selectedProductImageUrl);
      setProducts(products.filter((product) => product._id !== selectedProductId));
      setShowConfirmModal(false);
      setShowSuccessModal(true);
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
            <Button.Icon
              color="red"
              onClick={() => handleDeleteClick(params.row._id, params.row.img)}
            >
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

      {/* Confirmation Modal */}
      <ConfirmModal
        show={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={handleConfirmDelete}
        title="Confirm Deletion"
        message="Are you sure you want to delete this product? This action cannot be undone."
        yesText="Delete"
        noText="Cancel"
      />

      {/* Success Modal */}
      <CustomModal
        show={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        variant="success"
        title="Success"
        message="Product deleted successfully!"
      />
    </Container>
  );
}

export default ProductListPage;
