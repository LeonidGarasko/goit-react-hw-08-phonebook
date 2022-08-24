import styled from 'styled-components';

export const Input = styled.input`
  margin-top: ${p => p.theme.space[3]}px;
  width: 50%;
  height: 30px;
  font-size: ${p => p.theme.fontSizes.l};
  & ~ p {
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
