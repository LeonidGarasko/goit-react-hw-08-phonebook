import styled from 'styled-components';

export const ButtonDeleteStyle = styled.button`
  margin-left: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;
  transition: color 250ms linear, background-color 250ms linear;
  &:hover {
    color: ${p => p.theme.colors.secondary};
    background-color: ${p => p.theme.colors.white};
  }
`;
