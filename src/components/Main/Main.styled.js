import styled from 'styled-components';

export const MainPage = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: ${p => p.theme.space[4]}px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: ${p => p.theme.fontSizes.xl};
  color: ${p => p.theme.colors.black};
  & h1 {
    font-size: ${p => p.theme.fontSizes.xl};
    margin: 0 0 0 0;
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
