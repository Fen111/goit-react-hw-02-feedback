import s from './Statistics.module.css';
export default function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage, onReset } = props;
  return (
    <>
      <ul className={s.statList}>
        <li className={s.statItem}>good: {good}</li>
        <li className={s.statItem}>neutral: {neutral}</li>
        <li className={s.statItem}>bad: {bad}</li>
        <li className={s.statItem}>Total: {total}</li>
        <li className={s.statItem}>Positive feedback: {positivePercentage}%</li>
      </ul>
      <button
        className={s.statButton}
        type="button"
        onClick={() => {
          onReset();
        }}
      >
        Clear
      </button>
    </>
  );
}
