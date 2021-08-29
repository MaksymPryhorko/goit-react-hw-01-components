import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export default function Statistics({ stats, title }) {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.statList}>
        {stats.map(el => (
          <li key={el.id} className={style.item}>
            <span className={style.label}>{el.label}: </span>
            <span className={style.percentage}> {el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
