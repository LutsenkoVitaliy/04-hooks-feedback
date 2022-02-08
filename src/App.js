import React, { useState } from 'react';
import { Container } from './App.styled';
import Statistics from './components/Statistics';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';

export default function App () {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const countTotalFeedback = () => {
    return Object.values(state).reduce((accumulator, value) => accumulator + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((100 * state.good) / countTotalFeedback());
  };

  const valueIncrementLeaveFeedback = (option) => {
    setState((prevstate) => ({ ...prevstate, [option]: prevstate[option] + 1 }));
  };


  return (
    <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={valueIncrementLeaveFeedback} />
        </Section>

        <Section title={'Statistic'}>
          { countTotalFeedback() ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
            />) : (
            <Notification message={'There is no feedback'}/>
          )}
        </Section>
    </Container>
  )
}

