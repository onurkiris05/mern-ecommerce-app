import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import styled from "styled-components";
import * as ProductApi from "../api/products";
import CustomModal from "../components/CustomModal";
import * as ConstantsApi from "../api/constants";
import { Alert, Form } from "react-bootstrap";
import { Button } from "../components/Button";

const Container = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  width: clamp(25rem, 40%, 50rem);
  margin: 2rem auto 0;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 2rem 1rem;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const Color = styled.div<{ color: string }>`
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  border: 1px solid var(--clr-1);
  background-color: ${(props) => props.color};
`;

function NewProductPage() {
  const [showModal, setShowModal] = useState(false);
  const [errorText, setErrorText] = useState<string | null>(null);
  const [newColor, setNewColor] = useState<string | undefined>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    getValues,
    reset,
    control,
  } = useForm<ProductApi.ProductInput>();
  const [constants, setConstants] = useState<ConstantsApi.ConstantsProps>({
    categoryOptions: [],
    genderOptions: [],
    sizeOptions: [],
    sortOptions: [],
  });
  const colors = useWatch({ name: "colors", control });

  async function onSubmit(input: ProductApi.ProductInput) {
    const payload = {
      ...input,
      categories: input.categories || [],
      genders: input.genders || [],
      sizes: input.sizes || [],
      colors: input.colors || [],
    };

    try {
      await ProductApi.createProduct(payload);
      setShowModal(true);
      reset();
    } catch (error: any) {
      setErrorText(error.message);
      console.error(error);
    }
  }

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
      <Wrapper>
        <Title>New Product</Title>
        <Form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
          {errorText && <Alert variant="danger">{errorText}</Alert>}
          <Form.Group className="mb-4">
            <Form.Label className="me-4">Title: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              isInvalid={!!errors.title}
              {...register("title", { required: "Required" })}
            />
            <Form.Control.Feedback type="invalid">{errors.title?.message}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="me-4">Description: </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Description"
              isInvalid={!!errors.desc}
              {...register("desc", { required: "Required" })}
            />
            <Form.Control.Feedback type="invalid">{errors.desc?.message}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="me-4">Image URL: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Image URL"
              isInvalid={!!errors.img}
              {...register("img", { required: "Required" })}
            />
            <Form.Control.Feedback type="invalid">{errors.img?.message}</Form.Control.Feedback>
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
              isInvalid={!!errors.price}
              {...register("price", { required: "Required" })}
            />
            <Form.Control.Feedback type="invalid">{errors.price?.message}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="me-4">Stock: </Form.Label>
            <Form.Control type="number" placeholder="Stock" {...register("stock")} />
          </Form.Group>

          <Button.Primary size="1.5rem" type="submit" disabled={isSubmitting}>
            Create
          </Button.Primary>
        </Form>
      </Wrapper>
      <CustomModal
        show={showModal}
        onClose={() => setShowModal(false)}
        variant="success"
        title="Success"
        message="Product created successfully!"
      />
    </Container>
  );
}

export default NewProductPage;
