import React, { Component } from 'react';
import { Container } from './App.styled';
import Statistics from './components/Statistics';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';


class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((accumulator, value) => accumulator + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((100 * this.state.good) / this.countTotalFeedback());
  };

  valueIncrementLeaveFeedback = (option) => {
    this.setState((prevstate) => ({ [option]: prevstate[option] + 1 }));
  };

  render() {
    const { good } = this.state
    const { neutral } = this.state
    const { bad } = this.state
    
    return (
    <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.valueIncrementLeaveFeedback} />
        </Section>

        <Section title={'Statistic'}>
          {this.countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
            />) : (
            <Notification message={'There is no feedback'}/>
          )}
        </Section>
    </Container>
  )}
}

export default App;
