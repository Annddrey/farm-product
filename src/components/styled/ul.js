import styled, { css } from 'styled-components';

const gridList = css`
  display: grid;
  grid-template-columns: 540px 540px;
  column-gap: 20px;
  row-gap: 20px;
  padding: 64px 0;
  margin: 0;
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  ${(props) => (props.isGridList ? gridList : '')}
`;

export default Ul;
