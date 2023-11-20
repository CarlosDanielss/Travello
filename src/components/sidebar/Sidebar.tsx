import style from './Sidebar.module.css';

import { navbarListItems } from '../header/Header';

type SidebarProps = { open: boolean };

export const Sidebar = ({ open }: SidebarProps) => {
  return (
    <div className={`${style.container} ${open ? style.openSidebar : ''}`}>
      <ul className={style.content}>
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
    </div>
  );
};
