import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = props => {
  const sliderRef = useRef();

  let [totalSlides, setTotalSlides] = useState(null);
  let [centerMode, setCenterMode] = useState(false);

  useEffect(() => {
    findSlidesLimit();
  }, []);

  const findSlidesLimit = () => {
    let slidesNumber = sliderRef.current.clientWidth;
    if (slidesNumber <= 780) {
      setCenterMode((centerMode = true));
    }
    slidesNumber = Math.floor(slidesNumber / 200);
    setTotalSlides((totalSlides = slidesNumber));
  };

  const settings = {
    infinite: true,
    speed: 500,
    centerMode: centerMode,
    slidesToShow: totalSlides,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <SliderWrapper ref={sliderRef}>
      <Slider {...settings}>{props.children}</Slider>
    </SliderWrapper>
  );
};

// CUSTOM NEXT/PREV ARROWS FOR CAROUSEL

const NextArrow = ({ onClick }) => {
  return (
    <FontAwesomeIcon
      style={{
        right: '-20px',
        position: 'absolute',
        top: '50%',
        width: '16px',
        height: '16px',
        transform: 'translate(0, -50%)',
        cursor: 'pointer',
      }}
      onClick={onClick}
      icon={faAngleDoubleRight}
    />
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <FontAwesomeIcon
      style={{
        left: '-20px',
        position: 'absolute',
        top: '50%',
        width: '16px',
        height: '16px',
        transform: 'translate(0, -50%)',
        cursor: 'pointer',
      }}
      onClick={onClick}
      icon={faAngleDoubleLeft}
    />
  );
};

export default Carousel;

// STYLES

const SliderWrapper = styled.div``;
