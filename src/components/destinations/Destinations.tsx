import { useRef } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import style from './Destinations.module.css';

export const Destinations = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1188,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderRef = useRef<Slider | null>(null);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <section id="Destinations" className={style.container}>
      <div data-aos="fade-right" className={style.content}>
        <h2 className={style.title}>Destinations You Shouldn't Miss</h2>
        <p className={style.text}>
          Choose Your Destination and Contact Our Experts for the Best Deals!
        </p>
        <div className={style.groupBtn}>
          <button type="button" onClick={prevSlide} className={style.btnPrevious}>
            <AiOutlineLeft size={20} color="white" />
          </button>
          <button type="button" onClick={nextSlide} className={style.btnNext}>
            <AiOutlineRight size={20} color="white" />
          </button>
        </div>
      </div>
      <div data-aos="zoom-in-left" className={style.carousel}>
        <Slider ref={sliderRef} {...settings}>
          <div>
            <img
              className={style.carouselImages}
              src="images/carousel/indonesia.png"
              alt="Image carousel"
            />
          </div>
          <div>
            <img
              className={style.carouselImages}
              src="images/carousel/santorini.png"
              alt="Image carousel"
            />
          </div>
          <div>
            <img
              className={style.carouselImages}
              src="images/carousel/indonesia.png"
              alt="Image carousel"
            />
          </div>
          <div>
            <img
              className={style.carouselImages}
              src="images/carousel/santorini.png"
              alt="Image carousel"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};
