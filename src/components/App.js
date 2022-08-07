import { GlobalStyle } from './GlobalStyle';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';
import friends from '../friends.json';
import user from '../user.json';
import { Box } from './Box';
import data from '../data.json';

export const App = () => {
  return (
    <>
      <Box
        as="header"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="column"
      >
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
        <GlobalStyle />
      </Box>
    </>
  );
};
