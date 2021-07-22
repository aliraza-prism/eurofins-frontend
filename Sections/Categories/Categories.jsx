import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Categories.module.scss";

function Categories(props) {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/category`)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          const updatedRes = res.data.message;
          setCategory(updatedRes);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  console.log("Category Res", category);

  return (
    <div className={styles.categories_wrapper}>
      <Container>
        <h2>Our Range of Confidential Services</h2>
        <Row>
          {category?.map((x) => (
            <Col sm={6} md={4} key={x._id}>
              {/* <Link href="/[id]" as={`/${props._id}`} passHref> */}
              <Link
                href={`/products/[id]`}
                as={`/products/${x._id}`}
                passHref
              >
                <div
                  className={styles.category_card_wrapper}
                >
                  <div
                    className={styles.category_card_image}
                  >
                    <img
                      src={`http://localhost:4000/${x.image}`}
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
