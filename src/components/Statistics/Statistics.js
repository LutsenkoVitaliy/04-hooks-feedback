import PropTypes from "prop-types";
import {StatsList, StatsItem} from './Statistics.styled'

export default function Statistics ({ good, neutral, bad, total, positivePercentage }) {
  return (
    <StatsList>
    <StatsItem>Good :{good}</StatsItem>
    <StatsItem>Neutral: {neutral}</StatsItem>
    <StatsItem>Bad: {bad}</StatsItem>
    <StatsItem>Total: {total}</StatsItem>
    <StatsItem>Positive feedback: {positivePercentage}</StatsItem>
    </StatsList>
    
  )
}

Statistics.PropTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};



