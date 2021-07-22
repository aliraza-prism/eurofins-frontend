import React from "react";
import styles from "./ConfidentialServices.module.scss";
import ServicesCard from "../../Components/ServicesCard/ServicesCard";
import { confidentialServicesData } from "./../../utils/data";
import { Container, Row } from "react-bootstrap";

export default function ConfidentialServices({
  filteredProducts,
}) {
  return (
    <Container>
      <Row>
        {filteredProducts?.map((x, index) => (
          <React.Fragment key={index + x.text}>
            <ServicesCard product={x} />
          </React.Fragment>
        ))}
      </Row>
    </Container>
  );
}
