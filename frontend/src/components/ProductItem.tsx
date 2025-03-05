import styled from "styled-components";
import { Product } from "../data/productItems";
import OpenInFullRoundedIcon from "@mui/icons-material/OpenInFullRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { Button } from "./Button";

interface ProductItemProps {
  product: Product;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 30rem;

  & button {
    visibility: hidden;
    opacity: 0;
  }

  &:hover button {
    visibility: visible;
    opacity: 1;
  }

  &:hover::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.3);
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
  transition: 0.5s;
  z-index: -1;
`;

function ProductItem({ product }: ProductItemProps) {
  return (
    <Container>
      <Image src={product.img} />
      <Button.Icon>
        <OpenInFullRoundedIcon fontSize="inherit" />
      </Button.Icon>
      <Button.Icon>
        <FavoriteBorderRoundedIcon fontSize="inherit" />
      </Button.Icon>
    </Container>
  );
}

export default ProductItem;
