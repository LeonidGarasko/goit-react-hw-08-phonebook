import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { TableBody } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Box as="table" font-size="s" border="table" borderRadius="sm" width="50%">
      <Box as="thead" bg="primary" color="white">
        <Box as="tr">
          <Box as="th" p={4}>
            Type
          </Box>
          <Box as="th" p={4}>
            Amount
          </Box>
          <Box as="th" p={4}>
            Currency
          </Box>
        </Box>
      </Box>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <Box
            as="tr"
            key={id}
            color="black"
            fontSize="s"
            opacity={0.7}
            bg="white"
          >
            <Box as="th" p={4} fontWeight="normal">
              {type}
            </Box>
            <Box as="th" p={4} fontWeight="normal">
              {amount}
            </Box>
            <Box as="th" p={4} fontWeight="normal">
              {currency}
            </Box>
          </Box>
        ))}
      </TableBody>
    </Box>
  );
};

TransactionHistory.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
