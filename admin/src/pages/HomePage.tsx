import styled from "styled-components";
import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import { userData } from "../dummyData";
import WidgetSm from "../components/Widgets/WidgetSm";
import WidgetLg from "../components/Widgets/WidgetLg";

const Container = styled.div`
  flex: 1;
`;

const WidgetsContainer = styled.div`
  display: flex;
  margin: 1.25rem;
`;

function HomePage() {
  return (
    <Container>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <WidgetsContainer>
        <WidgetSm />
        <WidgetLg />
      </WidgetsContainer>
    </Container>
  );
}

export default HomePage;
