import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  color: ${(props) => props.theme.colorBlackText};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  animation: tick 0.2s ease-in-out;
`;
