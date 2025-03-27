import styled from "styled-components";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { useEffect, useState } from "react";
import * as OrderApi from "../api/orders";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  flex: 1;
  margin: 0 1.25rem;
  padding: 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 0 0 1rem -0.5rem rgba(0, 0, 0, 0.75);
`;

const Title = styled.span`
  font-size: 1.25rem;
`;

const MoneyContainer = styled.div`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
`;

const Money = styled.span`
  font-size: 2rem;
  font-weight: 600;
`;

const MoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 1.25rem;
`;

const Icon = styled.span<{ $negative?: boolean }>`
  font-size: 1rem;
  margin-left: 0.5rem;
  color: ${(props) => (props.$negative ? "red" : "green")};
`;

const Sub = styled.span`
  font-size: 1rem;
  color: gray;
`;

function FeaturedInfo() {
  const [incomes, setIncomes] = useState<{ _id: number; totalIncome: number }[]>([]);
  const [rate, setRate] = useState(0);

  useEffect(() => {
    const getIncomes = async () => {
      try {
        const response = await OrderApi.getIncomes();
        setIncomes(response);
      } catch (error) {
        console.log(error);
      }
    };
    getIncomes();
  }, []);

  useEffect(() => {
    if (!incomes.length) return;
    setRate(parseFloat(((incomes[1].totalIncome / incomes[0].totalIncome - 1) * 100).toFixed(1)));
  }, [incomes]);

  const data = [
    {
      title: "Revenue",
      amount: incomes.length > 0 ? `$${incomes[1].totalIncome}` : "$0",
      rate: rate,
    },
    { title: "Sales", amount: "$4,415", rate: -1.4 },
    { title: "Cost", amount: "$2,225", rate: 2.4 },
  ];

  return (
    <Container>
      {data.map((item, i) => (
        <Item key={i}>
          <Title>{item.title}</Title>
          <MoneyContainer>
            <Money>{item.amount}</Money>
            <MoneyRate>
              {`${item.rate}%`}
              <Icon $negative={item.rate < 0}>
                {item.rate < 0 ? <ArrowDownward /> : <ArrowUpward />}
              </Icon>
            </MoneyRate>
          </MoneyContainer>
          <Sub>Compared to last month</Sub>
        </Item>
      ))}
    </Container>
  );
}

export default FeaturedInfo;
