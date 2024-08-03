import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colorBlackText};
  text-decoration: none;
`;

export const StyledText = styled.span`
  font-size: 28px;
  font-weight: 700;
  line-height: 115%;
  margin-left: 24px;
`;
