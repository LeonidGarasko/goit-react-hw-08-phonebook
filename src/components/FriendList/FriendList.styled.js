import styled from 'styled-components';

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.colors.white};
  width: 100%;
  border: ${p => p.theme.borders.normal};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[6]}px;

  margin-bottom: ${p => p.theme.space[3]}px;
  box-shadow: 5px 3px #888888;
`;
