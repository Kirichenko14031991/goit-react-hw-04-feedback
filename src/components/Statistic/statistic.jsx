import PropTypes from 'prop-types';
import React from 'react';
import {
  StatisticsWrapper,
  FeedbackItem,
  PositiveFeedback,
} from './statistic.styled';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsWrapper>
      <FeedbackItem>Good: {good}</FeedbackItem>
      <FeedbackItem>Neutral: {neutral}</FeedbackItem>
      <FeedbackItem>Bad: {bad}</FeedbackItem>
      <FeedbackItem>Total: {total}</FeedbackItem>
      <PositiveFeedback>
        Positive feedback: {positivePercentage} %
      </PositiveFeedback>
    </StatisticsWrapper>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistic;
