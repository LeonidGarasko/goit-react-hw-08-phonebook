import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { CardWrapper, InfoContainer, Avatar } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box p={6} bg="gray" ml="auto" mr=" auto">
      <CardWrapper>
        <Avatar src={avatar} alt={username} />
        <Box fontSize="l" mb={3} fontWeight="bold">
          {username}
        </Box>
        <Box fontSize="s" opacity={0.8} color="text" mb={3}>
          @{tag}
        </Box>
        <Box fontSize="m" opacity={0.8} mb={5}>
          {location}
        </Box>
        <InfoContainer>
          <Box as="li" display="flex" flexDirection="column" pt={4} pb={4}>
            <Box fontSize="s" opacity={0.8} color="text" mb={2}>
              Followers
            </Box>
            <Box fontSize="m" fontWeight="bold" color="text">
              {stats.followers}
            </Box>
          </Box>
          <Box as="li" display="flex" flexDirection="column" pt={4} pb={4}>
            <Box fontSize="s" opacity={0.8} color="text" mb={2}>
              Views
            </Box>
            <Box fontSize="m" fontWeight="bold" color="text">
              {stats.views}
            </Box>
          </Box>
          <Box as="li" display="flex" flexDirection="column" pt={4} pb={4}>
            <Box fontSize="s" opacity={0.8} color="text" mb={2}>
              Likes
            </Box>
            <Box fontSize="m" fontWeight="bold" color="text">
              {stats.likes}
            </Box>
          </Box>
        </InfoContainer>
      </CardWrapper>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
