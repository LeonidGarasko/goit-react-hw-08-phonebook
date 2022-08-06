
import { GlobalStyle } from './GlobalStyle';
import { Profile } from "./Profile/Profile";
import user from '../user.json'
import { Box } from './Box';

export const App = () => {
  return (
    <>
      <Box
        as="header"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
      
   <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
      />
        <GlobalStyle />
        </Box>
      </>
      
  );
};
