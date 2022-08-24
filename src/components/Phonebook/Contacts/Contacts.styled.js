import styled from 'styled-components';

export const ContactsItem = styled.div`
  & p {
    margin-bottom: ${p => p.theme.space[2]}px;
  }
  & ul {
    margin-top: ${p => p.theme.space[3]}px;
    list-style: none;
    padding-left: ${p => p.theme.space[3]}px;
  }
  & li {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;
