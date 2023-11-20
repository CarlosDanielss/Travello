import style from './Footer.module.css';

import book from '../../assets/book.svg';
import dubai from '../../../public/images/dubai.png';
import gree from '../../../public/images/gree.png';
import japan from '../../../public/images/japan.png';
import miami from '../../../public/images/miami.png';
import tai from '../../../public/images/tai.png';

export const Footer = () => {
  const travelloListOptions = ['About Us', 'Careers', 'Collaboration', 'Destinations', 'policies'];
  return (
    <footer id="ContactUs" className={style.container}>
      <div className={style.content}>
        <div data-aos="fade-right" data-aos-delay="300" className={style.stay}>
          <h3 className={style.title}>Stay Connected</h3>
          <p className={style.text}>
            Address: Istanbul, Turkey
            <br />
            Phone: (+90) 985 98 75
          </p>
          <div className={style.follow}>
            <h4>Follow us on social media</h4>
            <div className={style.followIcons}>
              {[...Array(6)].map((index) => (
                <img key={index} src={book} alt="book" />
              ))}
            </div>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-delay="400" className={style.travello}>
          <h3 className={style.title}>Travello</h3>
          <ul>
            {travelloListOptions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div data-aos="fade-right" data-aos-delay="500" className={style.onInstagram}>
          <h3 className={style.title}>On Instagram</h3>
          <div className={style.instagramImages}>
            <img src={dubai} alt="imagem do instagram" />
            <img src={gree} alt="imagem do instagram" />
            <img src={japan} alt="imagem do instagram" />
            <img src={miami} alt="imagem do instagram" />
            <img src={tai} alt="imagem do instagram" />
            <img src={gree} alt="imagem do instagram" />
          </div>
        </div>
        <div data-aos="fade-right" data-aos-delay="600" className={style.newsletter}>
          <h3 className={style.title}>Newsletter</h3>
          <p className={style.text}>get updated news and offers!</p>
          <form className={style.fields}>
            <input type="text" placeholder="Enter Your Email Address" />
            <button type="submit">Get the Hottest offers</button>
          </form>
        </div>
      </div>
      <div className={style.reserved}>
        <h4>All Rights Reserved for Pigment Store.</h4>
      </div>
    </footer>
  );
};
