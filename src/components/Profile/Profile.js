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
          <Box as="li" display="flex" flexDirection="column">
            <span>Followers</span>
            <span>{stats.followers}</span>
          </Box>
          <Box as="li" display="flex" flexDirection="column">
            <Box fontSize="s" opacity={0.8} color="text" mb={3}>Views</Box fontSize="s" opacity={0.8} color="text" mb={3}>
            <Box fontSize="s" opacity={0.8} color="text" mb={3}>{stats.views}</Box fontSize="s" opacity={0.8} color="text" mb={3}>
          </Box>
          <Box as="li" display="flex" flexDirection="column">
            <Box fontSize="s" opacity={0.8} color="text" mb={3}>Likes</Box fontSize="s" opacity={0.8} color="text" mb={3}>
            <Box fontSize="s" opacity={0.8} color="text" mb={3}>{stats.likes}</Box fontSize="s" opacity={0.8} color="text" mb={3}>
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
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
