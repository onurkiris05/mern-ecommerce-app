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
  ShoppingBag,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ReactElement } from "react";
import HandymanIcon from "@mui/icons-material/Handyman";

const Container = styled.div`
  background-color: rgb(251, 251, 255);
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

const ListItem = styled.li<{ $active?: boolean }>`
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  background-color: ${(props) => (props.$active ? "rgb(240, 240, 255)" : "transparent")};
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
      { name: "Analytics", icon: <HandymanIcon /> }, //<Timeline />
      { name: "Sales", icon: <HandymanIcon /> }, //<TrendingUp />
    ],
  },
  {
    title: "Quick Menu",
    items: [
      { name: "Users", icon: <PermIdentity />, link: "/users" },
      { name: "Products", icon: <Storefront />, link: "/products" },
      { name: "Orders", icon: <ShoppingBag />, link: "/orders" },
      { name: "Reports", icon: <HandymanIcon /> }, //<BarChart />
    ],
  },
  {
    title: "Notifications",
    items: [
      { name: "Mail", icon: <HandymanIcon /> }, //<MailOutline />
      { name: "Feedback", icon: <HandymanIcon /> }, //<DynamicFeed />
      { name: "Messages", icon: <HandymanIcon /> }, //<ChatBubbleOutline />
    ],
  },
  {
    title: "Staff",
    items: [
      { name: "Manage", icon: <HandymanIcon /> }, //<WorkOutline />
      { name: "Reports", icon: <HandymanIcon /> }, //<Report />
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
                  <ListItem $active={item.active}>
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
