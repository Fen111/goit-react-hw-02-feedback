import s from './Statistics.module.css';
export default function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage, onReset } = props;
  return (
    <>
      <ul className={s.statList}>
        <li>good: {good}</li>
        <li>neutral: {neutral}</li>
        <li>bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </ul>
      <button
        className={s.statButton}
        type="button"
        onClick={() => {
          onReset();
        }}
      >
        Clear statistics
      </button>
    </>
  );
}
