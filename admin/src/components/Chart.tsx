import styled from "styled-components";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Container = styled.div`
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const Title = styled.h3`
  margin-bottom: 1rem;
`;

interface DataItem {
  name: string;
  [key: string]: string | number;
}

interface ChartProps {
  title: string;
  data: DataItem[];
  dataKey: string;
  grid?: boolean;
}

function Chart({ title, data, dataKey, grid }: ChartProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}

export default Chart;
