import styled from "styled-components";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

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

const Icon = styled.span<{ negative?: boolean }>`
  font-size: 1rem;
  margin-left: 0.5rem;
  color: ${(props) => (props.negative ? "red" : "green")};
`;

const Sub = styled.span`
  font-size: 1rem;
  color: gray;
`;

interface DataItem {
  title: string;
  amount: string;
  rate: number;
}

const data: DataItem[] = [
  { title: "Revenue", amount: "$2,415", rate: -11.4 },
  { title: "Sales", amount: "$4,415", rate: -1.4 },
  { title: "Cost", amount: "$2,225", rate: 2.4 },
];

function FeaturedInfo() {
  return (
    <Container>
      {data.map((item, index) => (
        <Item key={index}>
          <Title>{item.title}</Title>
          <MoneyContainer>
            <Money>{item.amount}</Money>
            <MoneyRate>
              {item.rate}{" "}
              <Icon negative={item.rate < 0}>
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
