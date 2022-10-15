import PropTypes from 'prop-types';
export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <h2>Statistic</h2>
      <span>Good = {good}</span>
      <span>Neutral = {neutral}</span>
      <span>Bad = {bad}</span>
      <span>Total = {total}</span>
      <span>Positive = {positivePercentage}%</span>
    </div>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
