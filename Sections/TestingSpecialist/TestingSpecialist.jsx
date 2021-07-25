import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styles from "./TestingSpecialist.module.scss";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";

class BottomSlider extends React.Component {
  render() {
    return (
      <>
        <div className={styles.testing_specialist_text}>
          <h6>Trusted DNA Testing Specialists</h6>
          <h2>What our customers have to say</h2>
        </div>
        <CarouselProvider
          naturalSlideWidth={70}
          naturalSlideHeight={
            window.screen.width <= 700 ? 50 : 8
          }
          totalSlides={3}
          // isPlaying={true}
          interval={3000}
        >
          <Slider>
            <Slide index={0} className={styles.slide_list}>
              <div className={styles.slider_list_text}>
                <p>
                  I just wanted to thank you for the way in
                  which you handled my test last week in a
                  professional and expedient manner. Not
                  quite the result I expected, but all
                  parties know where they stand, and happy
                  and well and it looks as though I’m
                  happily going to be a father of sorts,
                  despite the negative result.
                </p>
              </div>
            </Slide>

            <Slide index={1} className={styles.slide_list}>
              <div className={styles.slider_list_text}>
                <p>
                  We would like to pass on our thanks to the
                  Eurofins Lab team for your prompt
                  assistance in handling the testing of our
                  samples. It has truly been a pleasure
                  dealing with Eurofins Lab. Everyone we
                  have dealt with has been prompt,
                  knowledgeable and professional. We are
                  very grateful for your team’s efforts and
                  hard work in handling our request within
                  short time frames.
                </p>
              </div>
            </Slide>
            <Slide index={2} className={styles.slide_list}>
              <div className={styles.slider_list_text}>
                <p>
                  We would like to pass on our thanks to the
                  Eurofins Lab team for your prompt
                  assistance in handling the testing of our
                  samples. It has truly been a pleasure
                  dealing with Eurofins Lab. Everyone we
                  have dealt with has been prompt,
                  knowledgeable and professional. We are
                  very grateful for your team’s efforts and
                  hard work in handling our request within
                  short time frames.
                </p>
              </div>
            </Slide>
          </Slider>
          <ButtonBack className={styles.arrow_button_left}>
            <MdKeyboardArrowLeft />
          </ButtonBack>
          <ButtonNext className={styles.arrow_button_right}>
            <MdKeyboardArrowRight />
          </ButtonNext>
        </CarouselProvider>
      </>
    );
  }
}

export default BottomSlider;
