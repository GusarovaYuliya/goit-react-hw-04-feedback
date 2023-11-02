import css from './Statistics.module.css'
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul className={css.listItem}>
        <li className={css.item}>Good: {good}</li>
        <li className={css.item}>Neutral: {neutral}</li>
        <li className={css.item}>Dad: {bad}</li>
      </ul>
      <p className={css.total}>Total: {total}</p>
      <p className={css.total}>Positive feedback: {positivePercentage} %</p>
    </>
  );
};