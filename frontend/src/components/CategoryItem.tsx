import styled from "styled-components";
import { Category } from "../data/categoryItems";
import { Button } from "./Button";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: relative;
  flex: 1;
  height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: 0.5s;
  overflow: hidden;

  &:hover::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  &:hover img {
    transform: scale(1.2);
  }
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  transition: 0.5s;
`;

const Title = styled.h3`
  font-size: 3rem;
  color: white;
  text-align: center;
`;

interface CategoryItemProps {
  category: Category;
}

function CategoryItem({ category }: CategoryItemProps) {
  return (
    <Container>
      <Image src={category.img} alt={category.title} />
      <Title>{category.title}</Title>
      <Link to={`/products/${category.cat}`} onClick={() => window.scrollTo(0, 0)}>
        <Button.Secondary size="1.25rem">SHOP NOW</Button.Secondary>
      </Link>
    </Container>
  );
}

export default CategoryItem;
