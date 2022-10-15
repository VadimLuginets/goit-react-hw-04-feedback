import React from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Message from 'components/Message/Message';

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlClickFeedback = key => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  };

  render() {
    const total = this.state.bad + this.state.neutral + this.state.good;
    const positivePercentage = (this.state.good / total) * 100;
    return (
      <div>
        <Section
          title="Plese Leave feedback"
          children={
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handlClickFeedback}
            />
          }
        />
        {total === 0 ? (
          <Message message={'There is no feedback'} />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={Math.round(positivePercentage)}
          />
        )}
      </div>
    );
  }
}
