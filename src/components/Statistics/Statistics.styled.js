import styled from 'styled-components';

const randomColor = require('randomcolor');

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.white};
  width: 100%;
  text-align: center;
`;
export const StatsBox = styled.ul`
  display: flex;
  padding-left: 0px;
  margin: 0px;
`;

export const Stat = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${p => p.theme.space[4]}px;
  background-color: ${randomColor};
`;
