import {
  Container,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import styles from "./TestDetails.module.scss";
import { BiPhone } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPostOrder } from "../../redux/post-product/action";

const TestDetails = ({ productDetail }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const testId = productDetail?._id;

  //! Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      name,
      email,
      message,
      testId,
    };
    dispatch(createPostOrder(postData));
    alert("SUBMIT DATA");
  };

  console.log(
    "=Product detail from router",
    productDetail?._id,
    name,
    email,
    message
  );
  return (
    <div className={styles.test_details_wrapper}>
      <Container className={styles.test_details_container}>
        <Row>
          <Col xs={12} md={5}>
            <div className={styles.test_details_text}>
              <h2>{productDetail?.name}</h2>
              <p>{productDetail?.description}</p>
            </div>
          </Col>
          {/* //! ************Order Form ************ */}
          <Col md={{ span: 6, offset: 1 }}>
            <Form>
              <Form.Group
                controlId="formBasicEmail"
                className={styles.input_fields}
              >
                <Form.Control
                  type="text"
                  name=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                />
              </Form.Group>
              <Form.Group
                controlId="formBasicEmail"
                className={styles.input_fields}
              >
                <Form.Control
                  type="email"
                  name=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group
                controlId="exampleForm.ControlTextarea1"
                className={styles.input_fields}
              >
                <Form.Control
                  as="textarea"
                  name=""
                  value={message}
                  onChange={(e) =>
                    setMessage(e.target.value)
                  }
                  rows={3}
                  placeholder="Message"
                />
              </Form.Group>
              <div className={styles.button_wrap}>
                <Button
                  variant="primary"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
        {/* //! ***********Contact Details********** */}
        <div className={styles.test_contact_wrap}>
          <h4>Contact Details:</h4>
          <div>
            <Row>
              <Col sm={4}>
                <div className={styles.contact_number}>
                  <div className={styles.contact_icon_wrap}>
                    <BiPhone /> Phone Number
                  </div>
                  03206625492
                </div>
              </Col>
              <Col sm={4}>
                <div className={styles.contact_number}>
                  <div className={styles.contact_icon_wrap}>
                    <FaWhatsapp /> Whatsapp Number
                  </div>
                  +92 3206625492
                </div>
              </Col>
              <Col sm={4}>
                <div className={styles.contact_number}>
                  <div className={styles.contact_icon_wrap}>
                    <HiOutlineMail /> Email
                  </div>
                  arslanshahab@gmail.com
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TestDetails;
