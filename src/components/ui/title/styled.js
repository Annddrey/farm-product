import styled from "styled-components";

export const StyledTitle = styled.h1`
  margin: 0;
  margin-bottom: ${(props) => (props.marginBt ? props.marginBt : 0)}px;
  font-weight: 700;
  color: #333333;
  font-size: ${(props) => {
    let size = 44;
    if (props.$size === "medium") {
      size = 36;
    }
    if (props.$size === "small") {
      size = 24;
    }
    if (props.$size === "very-small") {
      size = 18;
    }
    return size;
  }}px;
`;
