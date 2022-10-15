export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(key => (
    <button type="button" key={key} onClick={() => onLeaveFeedback(key)}>
      {key}
    </button>
  ));
}
