import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServicesCard from "./../../Components/ServicesCard";

const ProductGrid = (props) => {
  console.log("Product Grid Props", props.filteredProducts);
  return (
    <div>
      <Container>
        <Row>
          {props.filteredProducts?.map((x) => (
            <Col key={x._id}>
              <ServicesCard
                product={x}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductGrid;
