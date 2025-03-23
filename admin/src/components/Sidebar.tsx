import styled from "styled-components";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ReactElement } from "react";

const Container = styled.div`
  flex: 1;
  height: calc(100vh - 3rem);
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 3rem;
`;

const Wrapper = styled.div`
  padding: 1.25rem;
  color: #555;
`;

const Menu = styled.div`
  margin-bottom: 0.5rem;
`;

const Title = styled.h3`
  font-size: 1rem;
  color: rgb(187, 186, 186);
`;

const List = styled.ul`
  list-style: none;
  padding: 0.5rem;
`;

const ListItem = styled.li<{ active?: boolean }>`
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  background-color: ${(props) => (props.active ? "rgb(240, 240, 255)" : "transparent")};
  &:hover {
    background-color: rgb(240, 240, 255);
  }
`;

const Icon = styled.span`
  margin-right: 0.5rem;
  font-size: 1.25rem !important;
`;

interface SidebarItemProps {
  title: string;
  items: {
    name: string;
    icon: ReactElement;
    link?: string;
    active?: boolean;
  }[];
}

const sidebarData: SidebarItemProps[] = [
  {
    title: "Dashboard",
    items: [
      { name: "Home", icon: <LineStyle />, link: "/", active: true },
      { name: "Analytics", icon: <Timeline /> },
      { name: "Sales", icon: <TrendingUp /> },
    ],
  },
  {
    title: "Quick Menu",
    items: [
      { name: "Users", icon: <PermIdentity />, link: "/users" },
      { name: "Products", icon: <Storefront />, link: "/products" },
      { name: "Transactions", icon: <AttachMoney /> },
      { name: "Reports", icon: <BarChart /> },
    ],
  },
  {
    title: "Notifications",
    items: [
      { name: "Mail", icon: <MailOutline /> },
      { name: "Feedback", icon: <DynamicFeed /> },
      { name: "Messages", icon: <ChatBubbleOutline /> },
    ],
  },
  {
    title: "Staff",
    items: [
      { name: "Manage", icon: <WorkOutline /> },
      { name: "Analytics", icon: <Timeline /> },
      { name: "Reports", icon: <Report /> },
    ],
  },
];

function Sidebar() {
  return (
    <Container>
      <Wrapper>
        {sidebarData.map((section, index) => (
          <Menu key={index}>
            <Title>{section.title}</Title>
            <List>
              {section.items.map((item, i) => (
                <Link to={item.link || "#"} key={i}>
                  <ListItem active={item.active}>
                    <Icon>{item.icon}</Icon>
                    {item.name}
                  </ListItem>
                </Link>
              ))}
            </List>
          </Menu>
        ))}
      </Wrapper>
    </Container>
  );
}

export default Sidebar;
