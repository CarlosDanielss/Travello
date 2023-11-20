import style from './RegisterNow.module.css';

export const RegisterNow = () => {
  return (
    <div className={style.container}>
      <div data-aos="zoom-in-up" className={style.content}>
        <h1>Register now for this weekend and save up to 10%!</h1>
        <button type="button">Book Now</button>
      </div>
    </div>
  );
};
