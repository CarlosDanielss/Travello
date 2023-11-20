import { useState } from 'react';

import { Sidebar } from '../sidebar/Sidebar';

import style from './BurguerMenu.module.css';

export const BurguerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.burguerMenu} onClick={() => setOpenMenu(!openMenu)}>
        <span className={`${openMenu ? style.closeMenu : ''}`}></span>
        <span className={`${openMenu ? style.closeMenu : ''}`}></span>
        <span className={`${openMenu ? style.closeMenu : ''}`}></span>
      </div>
      <Sidebar open={openMenu} />
    </div>
  );
};
