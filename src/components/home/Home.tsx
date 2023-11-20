import { useEffect, useRef } from 'react';

import { Header } from '../header/Header';
import { Ticket } from '../ticket/Ticket';

import mountainLeft from '../../assets/home-left-mountain.png';
import mountainRight from '../../assets/home-right-mountain.png';
import boat from '../../assets/home-boat.png';

import style from './Home.module.css';

export const Home = () => {
  const mountainLeftRef = useRef<HTMLImageElement | null>(null);
  const mountainRightRef = useRef<HTMLImageElement | null>(null);
  const boatRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      if (mountainLeftRef.current && mountainRightRef.current && boatRef.current) {
        mountainLeftRef.current.style.paddingRight = value + 'px';
        mountainRightRef.current.style.paddingLeft = value + 'px';
        boatRef.current.style.paddingTop = value + 'px';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="Home" className={style.container}>
      <img
        ref={mountainLeftRef}
        className={style.mountainLeft}
        src={mountainLeft}
        alt="Montanha da esquerda"
      />
      <img
        ref={mountainRightRef}
        className={style.mountainRight}
        src={mountainRight}
        alt="Montanha da esquerda"
      />
      <img ref={boatRef} className={style.boat} src={boat} alt="Montanha da esquerda" />
      <Header />
      <Ticket />
    </section>
  );
};
