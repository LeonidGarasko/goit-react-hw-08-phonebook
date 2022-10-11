import styled from 'styled-components';

const Input = styled.input`
  margin-top: ${p => p.theme.space[3]}px;
  width: 100%;
  height: 30px;
  font-size: ${p => p.theme.fontSizes.l};
  & ~ p {
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
export default Input;
