import styled from 'styled-components';

const Form = styled.form`
  padding: ${p => p.theme.space[4]}px;
  width: 500px;
  border: ${p => p.theme.borders.table};
  border-radius: ${p => p.theme.radii.md};
  display: flex;
  flex-direction: column;
`;
export default Form;
