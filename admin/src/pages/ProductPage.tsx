import styled from "styled-components";
import { useParams } from "react-router-dom";
import Chart from "../components/Chart";
import { productData } from "../dummyData";
import { useEffect, useState } from "react";
import { Product } from "../models/product";
import * as ProductApi from "../api/products";
import { formatDate } from "../utils";
import { useForm, useWatch } from "react-hook-form";
import { Alert, Form } from "react-bootstrap";
import { UnauthorizedError } from "../errors/http_errors";
import * as ConstantsApi from "../api/constants";
import CustomModal from "../components/Modals/CustomModal";
import { Button } from "../components/Button";
import ConfirmModal from "../components/Modals/ConfirmModal";
import LoadIndicator from "../components/LoadIndicator";

const Container = styled.div`
  flex: 1;
  padding: 1.25rem;
`;

const Title = styled.h1``;

const TopContainer = styled.div`
  display: flex;
`;

const TopRight = styled.div`
  flex: 1;
`;

const TopLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 1.25rem;
  margin: 1.25rem;
  -webkit-box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  -webkit-box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
`;

const InfoContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

const Name = styled.span`
  font-weight: 600;
`;

const InfoContent = styled.div`
  margin-top: 0.5rem;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoTitle = styled.div`
  font-weight: 500;
  color: rgb(175, 170, 170);
  margin-right: 1rem;
`;

const InfoValue = styled.div`
  font-weight: 300;
`;

const BottomContainer = styled.div`
  width: min(95%, 50rem);
  margin: 1.25rem auto;
  padding: 1.25rem;
  -webkit-box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
`;

const Color = styled.div<{ color: string }>`
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  border: 1px solid var(--clr-1);
  background-color: ${(props) => props.color};
`;

const EditTitle = styled.h2`
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
    setValue,
    getValues,
    control,
  } = useForm<ProductApi.ProductInput>({
    defaultValues: {
      title: "",
      desc: "",
      img: "",
      categories: [],
      genders: [],
      sizes: [],
      colors: [],
      price: 0,
      stock: 0,
    },
  });
  const [constants, setConstants] = useState<ConstantsApi.ConstantsProps>({
    categoryOptions: [],
    genderOptions: [],
    sizeOptions: [],
    sortOptions: [],
  });
  const [errorText, setErrorText] = useState<string | null>(null);
  const [newColor, setNewColor] = useState<string | undefined>();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const colors = useWatch({ name: "colors", control });

  async function onSubmit(input: ProductApi.ProductInput) {
    setIsLoading(true);
    try {
      const repsonse = await ProductApi.updateProduct(productId!, input);
      setProduct(repsonse);
      setShowSuccessModal(true);
    } catch (error) {
      if (error instanceof UnauthorizedError) {
        setErrorText(error.message);
      } else {
        alert(error);
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleConfirmUpdate() {
    setShowConfirmModal(false);
    handleSubmit(onSubmit)();
  }

  useEffect(() => {
    if (product) {
      reset({
        title: product.title,
        desc: product.desc,
        img: product.img,
        categories: product.categories,
        genders: product.genders,
        sizes: product.sizes,
        colors: product.colors,
        price: product.price,
        stock: product.stock,
      });
    }
  }, [product, reset]);

  useEffect(() => {
    const getProduct = async (id: string) => {
      try {
        const response = await ProductApi.getProduct(id);
        setProduct(response);
      } catch (error) {
        console.error("Error fetching prodcut:", error);
      }
    };
    productId && getProduct(productId);
  }, [productId]);

  useEffect(() => {
    const fetchConstants = async () => {
      try {
        const data = await ConstantsApi.getConstants();
        setConstants(data);
      } catch (e) {
        console.error("Error loading constants: ", e);
      }
    };
    fetchConstants();
  }, []);

  const handleAddColor = () => {
    if (!newColor) return;

    const currentColors = getValues("colors") || [];
    if (!currentColors.includes(newColor)) {
      const updatedColors = [...currentColors, newColor];
      setValue("colors", updatedColors);
    }
  };

  const handleRemoveColor = (color: string) => {
    const currentColors = getValues("colors") || [];
    const updatedColors = currentColors.filter((c) => c !== color);
    setValue("colors", updatedColors);
  };

  return (
    <Container>
      {isLoading ? (
        <LoadIndicator message="Updating Product..." />
      ) : (
        <>
          <Title>Product</Title>
          <TopContainer>
            <TopLeft>
              <ImgContainer>
                <Img src={product?.img} alt={product?.title} />
              </ImgContainer>
              <InfoContainer>
                <Name>{product?.title}</Name>
                <InfoContent>
                  <Info>
                    <InfoTitle>ID:</InfoTitle>
                    <InfoValue>{product?._id}</InfoValue>
                  </Info>
                  <Info>
                    <InfoTitle>Desc:</InfoTitle>
                    <InfoValue>{product?.desc}</InfoValue>
                  </Info>
                  <Info>
                    <InfoTitle>Categories:</InfoTitle>
                    <InfoValue>{product?.categories?.join(", ")}</InfoValue>
                  </Info>
                  <Info>
                    <InfoTitle>Genders:</InfoTitle>
                    <InfoValue>{product?.genders?.join(", ")}</InfoValue>
                  </Info>
                  <Info>
                    <InfoTitle>Sizes:</InfoTitle>
                    <InfoValue>{product?.sizes?.join(", ")}</InfoValue>
                  </Info>
                  <Info>
                    <InfoTitle>Colors:</InfoTitle>
                    <InfoValue>
                      {product?.colors?.map((color: string, i: number) => (
                        <Color key={i} color={color} />
                      ))}
                    </InfoValue>
                  </Info>
                  <Info>
                    <InfoTitle>Price:</InfoTitle>
                    <InfoValue>{`$${product?.price}`}</InfoValue>
                  </Info>
                  <Info>
                    <InfoTitle>Stock:</InfoTitle>
                    <InfoValue>{product?.stock}</InfoValue>
                  </Info>
                  <Info>
                    <InfoTitle>CreatedAt:</InfoTitle>
                    <InfoValue>{formatDate(product?.createdAt!)}</InfoValue>
                  </Info>
                  <Info>
                    <InfoTitle>UpdatedAt:</InfoTitle>
                    <InfoValue>{formatDate(product?.updatedAt!)}</InfoValue>
                  </Info>
                </InfoContent>
              </InfoContainer>
            </TopLeft>
            <TopRight>
              <Chart data={productData} dataKey="Sales" title="Sales Performance" />
            </TopRight>
          </TopContainer>
          <BottomContainer>
            <EditTitle>Edit</EditTitle>
            <Form className="d-flex flex-column">
              {errorText && <Alert variant="danger">{errorText}</Alert>}
              <Form.Group className="mb-4">
                <Form.Label className="me-4">Title: </Form.Label>
                <Form.Control type="text" placeholder="Title" {...register("title")} />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="me-4">Description: </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Description"
                  {...register("desc")}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="me-4">Img URL: </Form.Label>
                <Form.Control type="text" placeholder="Image" {...register("img")} />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="me-4">Categories: </Form.Label>
                {constants.categoryOptions.map((item: ConstantsApi.OptionProps, i: number) => (
                  <Form.Check
                    key={i}
                    inline
                    type="checkbox"
                    label={item.label}
                    value={item.value}
                    {...register("categories")}
                  />
                ))}
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="me-4">Genders: </Form.Label>
                {constants.genderOptions.map((item: ConstantsApi.OptionProps, i: number) => (
                  <Form.Check
                    key={i}
                    inline
                    type="checkbox"
                    label={item.label}
                    value={item.value}
                    {...register("genders")}
                  />
                ))}
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="me-4">Sizes: </Form.Label>
                {constants.sizeOptions.map((item: ConstantsApi.OptionProps, i: number) => (
                  <Form.Check
                    key={i}
                    inline
                    type="checkbox"
                    label={item.label}
                    value={item.value}
                    {...register("sizes")}
                  />
                ))}
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="me-4">Colors: </Form.Label>
                <div className="d-flex flex-wrap gap-4">
                  {colors?.map((color: string, i: number) => (
                    <div key={i} className="d-flex align-items-center">
                      <Color color={color} />
                      <button
                        type="button"
                        className="btn btn-sm btn-danger ms-1"
                        onClick={() => handleRemoveColor(color)}
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="me-4">Add New Color: </Form.Label>
                <div className="d-flex align-items-center gap-2">
                  <Form.Control
                    type="color"
                    value={newColor || "#333"}
                    onChange={(e) => setNewColor(e.target.value)}
                    style={{ width: "100px" }}
                  />
                  <Button.Secondary size="1rem" type="button" onClick={handleAddColor}>
                    Add
                  </Button.Secondary>
                </div>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="me-4">Price: </Form.Label>
                <Form.Control
                  type="number"
                  step="0.01"
                  placeholder="Price"
                  {...register("price")}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="me-4">Stock: </Form.Label>
                <Form.Control type="number" placeholder="Stock" {...register("stock")} />
              </Form.Group>
              <ButtonWrapper>
                <Button.Primary
                  size="1.5rem"
                  type="button"
                  onClick={() => setShowConfirmModal(true)}
                  disabled={isSubmitting}
                >
                  Update
                </Button.Primary>
              </ButtonWrapper>
            </Form>
          </BottomContainer>
        </>
      )}

      {/* Confirmation Modal */}
      <ConfirmModal
        show={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={handleConfirmUpdate}
        title="Confirm Update"
        message="Are you sure you want to update this product?"
        yesText="Update"
        noText="Cancel"
        yesColor="royalblue"
        noColor="lightgray"
      />

      {/* Success Modal */}
      <CustomModal
        show={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        variant="success"
        title="Success"
        message="Product updated successfully!"
      />
    </Container>
  );
}

export default ProductPage;
