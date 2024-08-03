import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.theme.pageWidth};
  min-height: 80px;
  align-items: center;
  margin: 0 auto;
  padding: 10px ${(props) => props.theme.pagePadding};
  background-color: #ffffff;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 0px 1px 0px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
`;
