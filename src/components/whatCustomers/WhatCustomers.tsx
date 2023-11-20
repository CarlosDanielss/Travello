import { useRef } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { CustomerOpinion } from '../customerOpinion/CustomerOpinion';

import style from './WhatCustomers.module.css';

export const WhatCustomers = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20%',
    responsive: [
      {
        breakpoint: 1064,
        settings: {
          centerMode: false,
        },
      },
    ],
  };

  const sliderRef = useRef<Slider | null>(null);

  return (
    <section id="Testemonial" className={style.container}>
      <h1 data-aos="fade-right" className={style.title}>
        What customers say about us
      </h1>
      <div data-aos="zoom-in-down" className={style.content}>
        <Slider ref={sliderRef} {...settings}>
          {[...Array(5)].map((_, index) => (
            <CustomerOpinion key={index} />
          ))}
        </Slider>
      </div>
    </section>
  );
};
