import client from '../../../public/images/Customer/client.png'

import style from './CustomerOpinion.module.css';

export const CustomerOpinion = () => {
  return (
    <div className={style.container}>
      <img src={client} alt="imagem do customer" />
      <div className={style.content}>
        <h3>Fatima Taylor</h3>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui</p>
      </div>
    </div>
  );
};
