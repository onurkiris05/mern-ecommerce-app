import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { Col, Container, Row } from "react-bootstrap";
import { Product } from "../../models/product";
import * as ProductApi from "../../api/products";

interface ProductsProps {
  gender: string;
  filters: Object;
  sort: string;
}

function Products({ gender, filters, sort }: ProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);

  const loadProducts = async () => {
    try {
      const query = { gender, ...filters, sort };
      const products = await ProductApi.getProducts(query);
      setProducts(products);
    } catch (error) {
      console.error("Error loading notes: ", error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [gender, filters, sort]);

  return (
    <Container fluid className="my-4">
      <Row className="g-4">
        {products.map((product) => (
          <Col key={product._id} lg={3} md={4} sm={6} xs={12}>
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
