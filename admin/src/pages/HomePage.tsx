import styled from "styled-components";
import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import WidgetSm from "../components/Widgets/WidgetSm";
import WidgetLg from "../components/Widgets/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import * as UserApi from "../api/users";

const Container = styled.div`
  flex: 1;
`;

const WidgetsContainer = styled.div`
  display: flex;
  margin: 1.25rem;
`;

function HomePage() {
  const [userStats, setUserStats] = useState<{ name: string; "Active User": number }[]>([]);

  const MONTHS = useMemo(
    () => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const response = await UserApi.getStats();

        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();

        const last12Months = Array.from({ length: 12 }, (_, index) => {
          const date = new Date(currentYear, currentMonth - index, 1);
          return {
            month: MONTHS[date.getMonth()],
            year: date.getFullYear(),
            monthIndex: date.getMonth() + 1,
          };
        }).reverse();

        const formattedStats = last12Months.map((monthData) => {
          const matchingStat = response.find((stat) => stat._id === monthData.monthIndex);
          return {
            name: `${monthData.month} ${monthData.year.toString().slice(-2)}`,
            "Active User": matchingStat ? matchingStat.total : 0,
          };
        });

        setUserStats(formattedStats);
      } catch (error) {
        console.error(error);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <Container>
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="Active User" />
      <WidgetsContainer>
        <WidgetSm />
        <WidgetLg />
      </WidgetsContainer>
    </Container>
  );
}

export default HomePage;
