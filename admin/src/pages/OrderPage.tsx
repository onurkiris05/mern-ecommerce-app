import styled from "styled-components";
import {
  CalendarToday,
  PermIdentity,
  Category,
  AttachMoney,
  LocationOn,
  Toc,
} from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatDate } from "../utils";
import { Alert, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import CustomModal from "../components/Modals/CustomModal";
import { Button } from "../components/Button";
import { Order } from "../models/order";
import * as OrderApi from "../api/orders";

const Container = styled.div`
  flex: 1;
  padding: 1.25rem;
`;

const Title = styled.h1``;

const ContentContainer = styled.div`
  display: flex;
  margin-top: 1.25rem;
`;

const Card = styled.div`
  flex: 1;
  padding: 2rem;
  -webkit-box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
`;

const Update = styled.div`
  flex: 1;
  padding: 2rem;
  -webkit-box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
  margin-left: 1.25rem;
`;

const CardTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

const CardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.75rem 0;
`;

const CardProductInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0.75rem 0;
`;

const CardInfoTitle = styled.p`
  margin: 0;
  font-weight: 500;
  color: rgb(175, 170, 170);
`;

const CardInfoDesc = styled.p`
  margin: 0;
  margin-left: 0.5rem;
`;

const CardProductInfoDesc = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UpdateTitle = styled.h2`
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

function OrderPage() {
  const { orderId } = useParams();
  const [order, setOrder] = useState<Order>();
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<{ status: string }>({
    defaultValues: {
      status: "pending",
    },
  });
  const [errorText, setErrorText] = useState<string | null>(null);

  async function onSubmit({ status }: { status: string }) {
    try {
      const updatedOrder: OrderApi.OrderUpdateInput = {
        userId: order?.userId,
        amount: order?.amount,
        address: order?.address,
        status,
      };
      const userResponse = await OrderApi.updateOrder(orderId!, updatedOrder);
      setOrder(userResponse);
      setShowModal(true);
    } catch (error: any) {
      setErrorText(error.message);
      console.error(error);
    }
  }

  useEffect(() => {
    const getOrder = async (id: string) => {
      try {
        const response = await OrderApi.getOrder(id);
        setOrder(response);
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    };
    orderId && getOrder(orderId);
  }, [orderId]);

  useEffect(() => {
    if (order) {
      reset({
        status: order.status,
      });
    }
  }, [order, reset]);

  return (
    <Container>
      <Title>Edit Order</Title>
      <ContentContainer>
        <Card>
          <CardTitle>Order Details</CardTitle>
          <CardInfo>
            <CardInfoTitle>
              <PermIdentity /> User ID:
            </CardInfoTitle>
            <CardInfoDesc> {order?.userId}</CardInfoDesc>
          </CardInfo>
          <CardProductInfo>
            <CardInfoTitle>
              <Category /> Products:
            </CardInfoTitle>
            {order?.products.length &&
              order.products.map((product: any) => (
                <CardProductInfoDesc key={product.productId}>
                  <span>ID: {product.productId}</span> <span>Qty: x{product.quantity}</span>
                </CardProductInfoDesc>
              ))}
          </CardProductInfo>
          <CardInfo>
            <CardInfoTitle>
              <AttachMoney /> Amount:
            </CardInfoTitle>
            <CardInfoDesc>{`$${order?.amount}`}</CardInfoDesc>
          </CardInfo>
          <CardInfo>
            <CardInfoTitle>
              <LocationOn /> Address:
            </CardInfoTitle>
            <CardInfoDesc>
              {order &&
                Object.values(order.address).map((value, i) => (
                  <span key={i}>
                    {value as string}
                    {i !== Object.values(order.address).length - 1 ? ", " : ""}
                  </span>
                ))}
            </CardInfoDesc>
          </CardInfo>
          <CardInfo>
            <CardInfoTitle>
              <Toc /> Status:
            </CardInfoTitle>
            {order && <Button.Status status={order.status as any}>{order.status}</Button.Status>}
          </CardInfo>
          <CardInfo>
            <CardInfoTitle>
              <CalendarToday /> Created At:
            </CardInfoTitle>
            <CardInfoDesc> {order && formatDate(order.createdAt)}</CardInfoDesc>
          </CardInfo>
          <CardInfo>
            <CardInfoTitle>
              <CalendarToday /> Updated At:
            </CardInfoTitle>
            <CardInfoDesc> {order && formatDate(order.updatedAt)}</CardInfoDesc>
          </CardInfo>
        </Card>
        <Update>
          <UpdateTitle>Edit</UpdateTitle>
          <Form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
            {errorText && <Alert variant="danger">{errorText}</Alert>}
            <Form.Group className="mb-4">
              <Form.Label>Order Status: </Form.Label>
              <Form.Select defaultValue="" {...register("status")}>
                <option value="">Choose...</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="declined">Declined</option>
              </Form.Select>
            </Form.Group>
            <ButtonWrapper>
              <Button.Primary size="1rem" type="submit" disabled={isSubmitting}>
                Update
              </Button.Primary>
            </ButtonWrapper>
          </Form>
        </Update>
      </ContentContainer>
      <CustomModal
        show={showModal}
        onClose={() => setShowModal(false)}
        variant="success"
        title="Success"
        message="Order updated successfully!"
      />
    </Container>
  );
}

export default OrderPage;
