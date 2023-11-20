import { Card } from '../card/Card';

import CardsData from '../../data/CardsData';

import style from './Offers.module.css';

export const Offers = () => {
  return (
    <section id="Offers" className={style.container}>
      <h1 data-aos="fade-right" className={style.title}>
        Upcoming Offers
      </h1>
      <div className={style.content}>
        {CardsData.map((data) => (
          <Card
            title={data.title}
            image={data.image}
            model={data.model}
            value={data.value}
            time={data.time}
          />
        ))}
      </div>
    </section>
  );
};
