import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.theme.pageWidth};
  min-height: 80px;
  align-items: center;
  margin: 0 auto;
  padding: 10px ${(props) => props.theme.pagePadding};
  background-color: #ffffff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  z-index: 5;
`;

export const StyledCopyright = styled.footer`
  font-size: inherit;
  color: inherit;
  font-weight: 400;
  line-height: 27px;
`;
