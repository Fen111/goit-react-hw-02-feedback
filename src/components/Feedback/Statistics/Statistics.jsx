export default function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <ul>
      <li>good: {good}</li>
      <li>neutral: {neutral}</li>
      <li>bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
}
