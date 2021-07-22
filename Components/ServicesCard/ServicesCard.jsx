import Link from "next/link";
import { Col } from "react-bootstrap";
import styles from "./ServicesCard.module.scss";

export default function ServicesCard(props) {
  console.log("ENV res", process.env.REACT_APP_SERVER_URL);

  return (
    <Col sm={6} md={3}>
      <Link href="/[id]" as={`/${props?._id}`} passHref>
        <div className={styles.services_card_wrapper}>
          <div className={styles.services_card_image}>
            <img
              src={`http://localhost:4000/${props?.image}`}
              alt="servicesImage"
            />
          </div>
          <div className={styles.services_card_text}>
            <h6>
              {props?.name}
              <br />
            </h6>
            <div className={styles.services_card_price}>
              From ${props?.price}
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
}
