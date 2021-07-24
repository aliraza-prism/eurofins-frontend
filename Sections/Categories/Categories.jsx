import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Categories.module.scss";

function Categories(props) {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`https://eurofins-backend.herokuapp.com/category`)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          const updatedRes = res.data.message;
          setCategory(updatedRes);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.categories_wrapper}>
      <Container>
        <h2>Our Range of Confidential Services</h2>
        <Row>
          {category?.map((x) => (
            <Col sm={6} md={3} key={x._id}>
              <Link
                href={`/products/[id]`}
                as={`/products/${x.name.replace(/\s+/g, "-").toLowerCase()}`}
                passHref
              >
                <div
                  className={styles.category_card_wrapper}
                >
                  <div
                    className={styles.category_card_image}
                  >
                    <img
                      src={`https://eurofins-backend.herokuapp.com/${x.image}`}
                      alt="categoryImage"
                    />
                  </div>
                  <div
                    className={styles.category_card_text}
                  >
                    <h6>{x.name}</h6>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Categories;
