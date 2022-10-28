import { useState } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Message from 'components/Message/Message';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const array = { good: good, neutral: neutral, bad: bad };
  const total = bad + neutral + good;
  const positivePercentage = (good / total) * 100;
  const onLeaveFeedback = event => {
    switch (event) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <Section
        title="Plese Leave feedback"
        children={
          <FeedbackOptions
            options={Object.keys(array)}
            onLeaveFeedback={onLeaveFeedback}
          />
        }
      />
      {total === 0 ? (
        <Message message={'There is no feedback'} />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={Math.round(positivePercentage)}
        />
      )}
    </div>
  );
}
