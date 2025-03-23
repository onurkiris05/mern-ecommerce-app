import styled from "styled-components";
import { transactions } from "../../dummyData";

const Container = styled.div`
  flex: 2;
  box-shadow: 0px 0px 1rem -0.5rem rgba(0, 0, 0, 0.75);
  padding: 1.25rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 1.25rem;
`;

const Th = styled.th`
  text-align: left;
`;

const User = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const Img = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.5rem;
`;

const Date = styled.td`
  font-weight: 300;
`;

const Amount = styled.td`
  font-weight: 300;
`;

const Button = styled.button<{ type: string }>`
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.type === "Approved" ? "#e5faf2" : props.type === "Declined" ? "#fff0f1" : "#ebf1fe"};
  color: ${(props) =>
    props.type === "Approved" ? "#3bb077" : props.type === "Declined" ? "#d95087" : "#2a7ade"};
`;

function WidgetLg() {
  return (
    <Container>
      <Title>Latest transactions</Title>
      <Table>
        <thead>
          <tr>
            <Th>Customer</Th>
            <Th>Date</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, i) => (
            <tr key={i}>
              <User>
                <Img src={transaction.image} alt="" />
                <span>{transaction.customer}</span>
              </User>
              <Date>{transaction.date}</Date>
              <Amount>{transaction.amount}</Amount>
              <td>
                <Button type={transaction.status}>{transaction.status}</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default WidgetLg;
