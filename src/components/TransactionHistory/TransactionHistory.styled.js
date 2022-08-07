import styled from 'styled-components';

export const TableBody = styled.tbody`
  tr:nth-child(2n) {
    background-color: ${p => p.theme.colors.gray};
  }
`;
