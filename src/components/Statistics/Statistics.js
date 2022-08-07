import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Title, StatsBox, Stat } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={6}
      bg="gray"
    >
      {title && <Title>{title}</Title>}

      <StatsBox>
        {stats.map(({ id, label, percentage }) => (
          <Stat key={id}>
            <Box as="span">{label}</Box>
            <Box as="span">{percentage}</Box>
          </Stat>
        ))}
      </StatsBox>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  props: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
