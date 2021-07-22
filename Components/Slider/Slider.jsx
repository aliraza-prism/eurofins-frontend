import Head from "next/head";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import styles from "./Slider.module.scss";

export default function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        pause
      >
        <Carousel.Item
          className={styles.slider_image_wrapper}
        >
          <img
            className={styles.slider_image}
            src="https://dnaq.com.au/wp-content/uploads/2019/04/hero-slider-3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Non-Invasive Prenatal Testing</h3>
            <p>Available from as early as 7 weeks.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          className={styles.slider_image_wrapper}
        >
          <img
            className={styles.slider_image}
            src="https://dnaq.com.au/wp-content/uploads/2020/05/hero-slider-6.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Eurofins Lab Special</h3>
            <p>
              Test Direct with Australia’s Largest Privately
              Owned Testing lab.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
