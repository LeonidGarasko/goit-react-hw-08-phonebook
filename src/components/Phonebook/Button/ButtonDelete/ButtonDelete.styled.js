import styled from 'styled-components';

const ButtonDeleteStyle = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 250ms linear, color 250ms linear;
  transform: translateY(0);
  & svg {
    width: 30px;
    height: 30px;
  }
  &:hover {
    color: #07c;
    transform: translateY(-5px);
  }
  &:disabled {
  }
`;

export default ButtonDeleteStyle;
