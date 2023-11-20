import { BurguerMenu } from '../burguerMenu/BurguerMenu';

import style from './Header.module.css';

export const navbarListItems = [
  'Home',
  'Offers',
  'E-book',
  'Destinations',
  'Blog',
  'Testemonial',
  'Contact Us',
];

export const Header = () => {
  return (
    <header data-aos="fade-down" className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>TRAVELLO</h1>
        <nav className={style.navbarDesktop}>
          <ul className={style.navbarDesktopOptions}>
            {navbarListItems.map((item) => {
              const regex = /\s/g;
              const adjustItemPath = item.replace(regex, '');

              return (
                <li key={item} className={style.navbarItem}>
                  <a href={`#${adjustItemPath}`}>{item}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <nav className={style.navbarMobile}>
          <BurguerMenu />
        </nav>
      </div>
    </header>
  );
};
