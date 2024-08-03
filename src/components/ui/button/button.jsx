import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 260px;
  max-width: 600px;
  min-height: 60px;
  padding: 15px 20px;
  font-size: inherit;
  font-weight: 700;
  line-height: 27px;
  color: #ffffff;
  background-color: ${(props) => props.theme.bgButtonColor};
  box-sizing: border-box;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  animation: tick 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.bgHoverButton};
    box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.14) inset;
  }
  &:active {
    box-shadow: none;
  }
`;

export default Button;
