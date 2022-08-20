import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedbacks,
  positiveFeedback,
}) => (
  <Box as="ul" fontSize="l" color="primary" m={4}>
    <Box as="li" p={2}>
      Good: {good}
    </Box>
    <Box as="li" p={2}>
      Neutral: {neutral}
    </Box>
    <Box as="li" p={2}>
      Bad: {bad}
    </Box>
    <Box as="li" p={2}>
      Total: {totalFeedbacks}
    </Box>
    <Box as="li" p={2}>
      Positive feedback: {positiveFeedback}
    </Box>
  </Box>
);

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedbacks: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
