import React, { Component } from 'react';
import { Container } from './App.styled';
import Statistics from './components/Statistics/Statistics';




class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  countTotalFeedback = () => {

  };

  countPositiveFeedbackPercentage = () => {
  
  };


  render() {
    return (
    <Container>
        <h1>Please leave feedback</h1>
        <ul>
          <li><button type='button' onClick={
          () => {
console.log('good');
          }}>Good</button></li>
          <li><button type='button' onClick={
          () => {
console.log('neutral');
          }}>Neutral</button></li>
          <li><button type='button' onClick={
          () => {
console.log('bad');
          }}>Bad</button></li>
        </ul>

        <h1>Statistics</h1>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: { }</p>
        <p>Positive feedback: { }</p>
        
    </Container>
  )}
}



export default App;
