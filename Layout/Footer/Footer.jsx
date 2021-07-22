import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.scss";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className={styles.footer_wrapper}>
        <Container>
          <Row>
            <Col xs={6} md={2}>
              <p>Home</p>
              <p>About Us</p>
              <p>Contact Us</p>
            </Col>
            <Col xs={6} md={3}>
              <p>Services</p>
              <p>Paternity Testing</p>
              <p>Prenatal Testing</p>
              <p>Surrogacy Testing</p>
              <p>Immigration DNA Testing</p>
            </Col>
            <Col xs={6} md={4}>
              <p>Legal Sample Collection Process</p>
              <p>Non-Legal Sample Collection Process</p>
              <p>FAQ’s</p>
              <p>Understanding Paternity Testing Results</p>
              <p>Collection Centres & Appointments</p>
            </Col>
            <Col xs={6} md={3}>
              <div className={styles.footer_log}>
                <img
                  src="https://dnaq.com.au/wp-content/uploads/2020/01/DNAQ-green-white-logo.png"
                  alt="footerIamge"
                />
              </div>
              <span>Terms & Conditions</span> |{" "}
              <span>Privacy Policy</span>
              <FaFacebookSquare
                className={styles.footer_icons}
              />{" "}
              <FaInstagram
                className={styles.footer_icons}
              />{" "}
              <FaLinkedin className={styles.footer_icons} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.bottom_footer}>
        <Container>
          <p>
            Site Design, SEO, SEM and Management by
            Optimised
          </p>
        </Container>
      </div>
    </>
  );
}
