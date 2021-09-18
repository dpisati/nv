import React from 'react'

import './styles.css';

import { 
  HeroContainer, 
  Slide, 
  SlideImg, 
  HeroTextContainer, 
  BreakLine } from './styles';
import Slider from "react-slick";

import hero1 from '../../assets/images/lp1.png';
import hero2 from '../../assets/images/lp2.png';
import arrowRight from '../../assets/images/arrowRight.svg';
import arrowLeft from '../../assets/images/arrowLeft.svg';
import plus from '../../assets/images/plusWhite.svg';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="arrowRight"
      onClick={onClick}
    >
      <img src={arrowRight} alt="Next" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="arrowLeft"
      onClick={onClick}
    >
      <img src={arrowLeft} alt="Previous" />
    </div>
  );
}

export default function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
    return (
      <HeroContainer>
        <Slider {...settings}>
          <Slide>
            <SlideImg src={hero1} alt="Buildings" />
              <HeroTextContainer>
                <h1>The first name <BreakLine />
                  in <strong>corporate law</strong>.
                </h1>

                <div>
                  <p>Meet our team</p>
                  <button>
                    <img src={plus} alt="Plus Symbol" />
                  </button>
                </div>
            </HeroTextContainer>
          </Slide>
          <Slide>
            <SlideImg src={hero2} alt="Meeting" />
              <HeroTextContainer>
                <h1>Our people make<br />
                  <strong>the difference</strong>.
                </h1>

                <div>
                  <p>Meet our team</p>
                  <button>
                    <img src={plus} alt="Plus Symbol" />
                  </button>
                </div>
              </HeroTextContainer>
          </Slide>
        </Slider>


      </HeroContainer>
    )
}
