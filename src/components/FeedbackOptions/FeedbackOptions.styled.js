import styled from 'styled-components';

export const Button = styled.button`
  color: ${p => p.theme.colors.black};
  padding: ${p => p.theme.space[3]}px;
  margin-right: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes.l};
  background-color: transparent;
  border: ${p => p.theme.borders.table};
  border-radius: ${p => p.theme.radii.md};
  cursor: pointer;
  transition: color 250ms linear;
  transition: background-color 250ms linear;
  &:hover {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
`;
