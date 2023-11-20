import style from './InforTable.module.css';

interface InforTableProps {
  title: string;
  subtitle: string;
}

export const InforTable = ({ title, subtitle }: InforTableProps) => {
  return (
    <div className={style.info}>
      <h3 className={style.title}>{title}</h3>
      <h2 className={style.subtitle}>{subtitle}</h2>
    </div>
  );
};
