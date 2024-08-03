import React from 'react';
import Logo from '/src/components/ui/logo/loge';
import { StyledFooter, StyledCopyright } from './styled';

function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <StyledCopyright>Создано 2021</StyledCopyright>
    </StyledFooter>
  );
}

export default Footer;
