import { Container, Row, Col } from "react-bootstrap";
import styles from "./OurServices.module.scss";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { ourServicesData } from "../../utils/data";

export default function OurServices() {
  return (
    <div className={styles.our_services_wrapper}>
      <Container>
        <Row>
          <Col xs={12} md={5}>
            <div className={styles.our_services_image}>
              <img
                src="https://dnaq.com.au/wp-content/uploads/2020/02/about-dnaq.jpg"
                alt="ourservicesImage"
              />
            </div>
          </Col>
          <Col xs={12} md={7}>
            <div className={styles.our_services_text}>
              <h6>DNA Testing Facility</h6>
              <h2>Why Choose Eurofins Lab?</h2>

              <div className={styles.services_list}>
                <ul>
                  {ourServicesData?.map((x, index) => (
                    <li key={index + x.text}>{x.text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
