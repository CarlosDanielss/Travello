import style from './Discover.module.css';

import book from '../../assets/book.png';

export const Discover = () => {
  return (
    <section id="E-book" className={style.container}>
      <img data-aos="zoom-out" data-aos-duration="1000" src={book} alt="Livro" />
      <div data-aos="fade-left" className={style.content}>
        <h2 className={style.title}>Discover the world with us</h2>
        <p className={style.text}>
          Would you explore nature paradise in the world, let’s find the best destination in world
          with us, Would you explore nature paradise in the world, let’s find the best destination
          in world with us.
        </p>
        <button className={style.btn} type="button">
          Download Guide Book
        </button>
      </div>
    </section>
  );
};
