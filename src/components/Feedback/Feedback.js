import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from '../Notification/Notification';
import { Box } from 'components/Box';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  clickOnBtn = feedback => {
    this.setState(prevState => {
      return {
        [feedback]: prevState[feedback] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, feedback) => {
      return acc + feedback;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return `${
      Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0
    }%`;
  };

  render() {
    return (
      <Box display="flex" flexDirection="column" alignItems="center">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.clickOnBtn}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              totalFeedbacks={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification text="There is no feedback" />
          )}
        </Section>
      </Box>
    );
  }
}
