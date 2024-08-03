import React from 'react';
import Logo from '/src/components/ui/logo/loge';
import Nav from '/src/components/layout/nav/nav';
import { StyledHeader } from './styled';

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
}

export default Header;
