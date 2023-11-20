import style from './Card.module.css';

interface CardProps {
  title: string;
  image: string;
  model: string;
  value: number;
  time: string;
}

export const Card = ({ title, image, model, value, time }: CardProps) => {
  return (
    <div className={style.container} data-aos="zoom-in" data-aos-delay={time}>
      <div className={style.content}>
        <h1 className={style.title}>{title}</h1>
        <img className={style.image} src={image} alt="#" />
        <div className={style.info}>
          <h5 className={`${style.model} ${model === 'Relax' ? style.modelRelax : ''}`}>
            {model}
          </h5>
          <p className={style.descriptions}>2 Days, 1 Nights</p>
          <p className={style.descriptions}>20.5.2023</p>
        </div>
        <div className={style.hire}>
          <h2 className={style.value}>
            {value}$<p>/Person</p>
          </h2>
          <button type="button" className={style.btnBook}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
