import React from 'react';
import { useLocation } from 'react-router-dom';
import { StyledLink } from './styled';
import { AppRoute } from '/src/const';
import Button from '/src/components/ui/button/button';

const buttons = [
  {
    to: AppRoute.MAIN,
    button: <StyledLink to={AppRoute.MAIN}>Главная</StyledLink>,
  },
  {
    to: AppRoute.ORDER,
    button: <Button to={AppRoute.ORDER}>Купить</Button>,
  },
];

function Nav() {
  const pageUrl = useLocation().pathname;

  return <nav>{buttons.find((button) => button.to !== pageUrl).button}</nav>;
}

export default Nav;
