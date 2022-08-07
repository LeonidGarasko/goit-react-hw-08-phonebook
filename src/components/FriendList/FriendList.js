import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { FriendCard } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Box
      as="ul"
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="gray"
      pl={0}
    >
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendCard key={id}>
          <Box
            width={15}
            height={15}
            borderRadius="round"
            bg={isOnline ? 'green' : 'red'}
            mr={2}
            opacity={0.6}
          ></Box>
          <Box as="img" src={avatar} alt={name} width="48" />
          <Box ml={3} fontWeight="middle" fontSize="l">
            {name}
          </Box>
        </FriendCard>
      ))}
    </Box>
  );
};

FriendList.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
