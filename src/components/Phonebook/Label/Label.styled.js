import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${p => p.theme.fontSizes.sl};
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;
export default Label;
