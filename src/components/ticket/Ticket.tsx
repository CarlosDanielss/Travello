import { useState } from 'react';

import { InforTable } from '../inforTable/InforTable';

import { MdFlight, MdDateRange } from 'react-icons/md';
import { FaHotel } from 'react-icons/fa';

import style from './Ticket.module.css';

export const Ticket = () => {
  const [activeTicket, setActiveTicket] = useState(true);

  const ticketReverse = () => {
    setActiveTicket(!activeTicket);
  };

  return (
    <div className={style.container}>
      <h1
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="1000"
        className={style.description}
      >
        Explore, Dream, Travel
      </h1>
      <div
        className={style.containerTicket}
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="1500"
      >
        <div className={style.ticketModel}>
          <button
            className={`${style.ticketItems} ${activeTicket ? style.ticketActive : ''}`}
            onClick={ticketReverse}
            type="button"
          >
            <MdFlight />
            Flight
          </button>
          <button
            className={`${style.ticketItems} ${activeTicket ? '' : style.ticketActive}`}
            onClick={ticketReverse}
            type="button"
          >
            <FaHotel />
            Hotel
          </button>
        </div>
        <div className={style.ticketTabs}>
          <div className={style.tabLocal}>
            <InforTable title="Living From" subtitle="Dubai" />
            <div className={style.flightCircle}>
              <MdFlight size={24} color="#292d32" />
            </div>
            <InforTable title="Going to" subtitle="Istanbul" />
          </div>
          <div className={style.tabDate}>
            <InforTable title="Leave" subtitle="23 Jan, Sat" />
            <div className={style.flightCircle}>
              <MdDateRange size={24} color="#292d32" />
            </div>
            <InforTable title="Return" subtitle="14 Jan, Thu" />
          </div>
        </div>
      </div>
    </div>
  );
};
