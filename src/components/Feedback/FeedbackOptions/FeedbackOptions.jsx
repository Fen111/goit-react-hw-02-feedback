export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(item => (
        <button
          type="button"
          key={item}
          onClick={() => {
            onLeaveFeedback(item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
