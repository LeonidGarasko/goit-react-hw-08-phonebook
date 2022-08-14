import { GlobalStyle } from './GlobalStyle';

import { Box } from './Box';

export class App extends Component {
  render() {
    return (
      <>
        <Box
          as="header"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection="column"
        >
          <GlobalStyle />
        </Box>
      </>
    );
  }
}
