import { Form, Row, Col } from "react-bootstrap";
import { AddressInput, setAddress } from "../../redux/addressRedux";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../Button";
import { useDispatch } from "react-redux";

const Title = styled.h3`
  font-weight: 300;
  border-top: 1px solid lightgray;
  margin: 2rem 0 1rem;
  padding-top: 2rem;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface AddressFormProps {
  onFormSubmit: () => void;
}

function AddressForm({ onFormSubmit }: AddressFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AddressInput>();
  const dispatch = useDispatch();

  const onSubmit = (address: AddressInput) => {
    dispatch(setAddress(address));
    onFormSubmit();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Shipping Address</Title>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          isInvalid={!!errors.email}
          {...register("email", { required: "Required" })}
        />
        <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          placeholder="Enter full name"
          isInvalid={!!errors.name}
          {...register("name", { required: "Required" })}
        />
        <Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          placeholder="1234 Main St"
          isInvalid={!!errors.address}
          {...register("address", { required: "Required" })}
        />
        <Form.Control.Feedback type="invalid">{errors.address?.message}</Form.Control.Feedback>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            placeholder="Enter city"
            isInvalid={!!errors.city}
            {...register("city", { required: "Required" })}
          />
          <Form.Control.Feedback type="invalid">{errors.city?.message}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="zip">
          <Form.Label>Zip</Form.Label>
          <Form.Control
            placeholder="Enter zip"
            isInvalid={!!errors.zip}
            {...register("zip", { required: "Required" })}
          />
          <Form.Control.Feedback type="invalid">{errors.zip?.message}</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>State</Form.Label>
        <Form.Select
          defaultValue=""
          isInvalid={!!errors.country}
          {...register("country", { required: "Required" })}
        >
          <option value="">Choose...</option>
          <option value="United States">United States</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">{errors.country?.message}</Form.Control.Feedback>
      </Form.Group>

      <ButtonWrapper>
        <Button.Primary size="1.5rem" type="submit" disabled={isSubmitting}>
          Next
        </Button.Primary>
      </ButtonWrapper>
    </Form>
  );
}

export default AddressForm;
