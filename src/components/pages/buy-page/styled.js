import styled from 'styled-components';

export const StyledPage = styled.div`
  position: absolute;
  top: 80px;
  bottom: 80px;
  display: flex;
  padding: 40px ${(props) => props.theme.pagePadding} 0;
  background-color: ${(props) => props.theme.colorGray};
  max-width: 1280px;
  box-sizing: border-box;
`;
