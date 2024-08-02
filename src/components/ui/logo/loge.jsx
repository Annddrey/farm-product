import React from "react";
import logo from "/src/assets/logo.svg";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";
import { StyledLink, StyledText } from "./styled";

function Logo() {
  return useLocation().pathname === AppRoute.MAIN ? (
    <StyledLink as="span">
      <img src={logo} width={44} height={44} alt="Логотип" />
      <StyledText>Фермерские продукты</StyledText>
    </StyledLink>
  ) : (
    <StyledLink to={AppRoute.MAIN}>
      <img src={logo} width={44} height={44} alt="Логотип" />
      <StyledText>Фермерские продукты</StyledText>
    </StyledLink>
  );
}

export default Logo;
