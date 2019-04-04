import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
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

const SliderWrapper = styled.div`
  background: #a9a9a9;
`;
