import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const stateArrayValue = Object.values(this.state);
    const summFeedback = stateArrayValue.reduce((acc, value) => acc + value, 0);
    return summFeedback;
  }

  countPositiveFeedbackPercentage() {
    const summFeedback = this.countTotalFeedback();
    return Math.round((this.state.good / summFeedback) * 100);
  }

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  render() {
    const stateArrayKeys = Object.keys(this.state);

    return (
      <div className="Feedback">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={stateArrayKeys}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
        <Notification message="There is no feedback" />
      </div>
    );
  }
}

export default Feedback;
