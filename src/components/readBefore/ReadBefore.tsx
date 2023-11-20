import Nusa from '../../../public/images/ReadBefore/nusaPenida.png';
import Indonesia from '../../../public/images/ReadBefore/indonesia.png';

import { BsFillArrowRightSquareFill } from 'react-icons/bs';

import style from './ReadBefore.module.css';

export const ReadBefore = () => {
  return (
    <section id="Blog" className={style.container}>
      <h1 data-aos="fade-right" className={style.title}>
        Read Before You Travel
      </h1>
      <div className={style.content}>
        <div className={style.groupInfo}>
          <img data-aos="zoom-in" className={style.infoImage} src={Nusa} alt="Nusa Penida" />
          <div data-aos="fade-left" className={style.info}>
            <h2 className={style.infoTitle}>NUSA PENIDA ISLAND GUIDE</h2>
            <p className={style.infoText}>
              The beautiful, exotic Nusa Penida island lies just 25 kilometers from Bali, the most
              famous tourist destination in Indonesia.
            </p>
            <a className={style.infoLink} href="#">
              <BsFillArrowRightSquareFill />
              read more
            </a>
          </div>
        </div>
        <div className={style.groupInfo}>
          <div data-aos="fade-right" className={style.info}>
            <h2 className={style.infoTitle}>17 BEST WATERFALLS IN INDONESIA</h2>
            <p className={style.infoText}>
              Putting together an Indonesia waterfall guide is tough, because there are so many
              great waterfalls in this country.
            </p>
            <a className={style.infoLink} href="#">
              <BsFillArrowRightSquareFill />
              read more
            </a>
          </div>
          <img data-aos="zoom-in" className={style.infoImage} src={Indonesia} alt="Nusa Penida" />
        </div>
      </div>
    </section>
  );
};
