import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import SingleProduct from "../components/Products/SingleProduct";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import * as ProductApi from "../api/products";
import { Product } from "../models/product";

const Container = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;

function ProductPage() {
  const [product, setProduct] = useState<Product>({} as Product);
  const productId = useLocation().pathname.split("/")[2];

  useEffect(() => {
    const getProduct = async () => {
      try {
        const product = await ProductApi.getProduct(productId);
        setProduct(product);
      } catch (e) {
        console.error("Error loading product: ", e);
      }
    };
    getProduct();
  }, [productId]);

  return (
    <Container>
      <Header />
      <Announcement />
      <SingleProduct product={product} />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductPage;
