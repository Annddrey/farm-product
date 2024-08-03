import React from 'react';
import { StyledDescription } from './styled';

function Description({ text, className }) {
  return <StyledDescription className={className}>{text}</StyledDescription>;
}

export default Description;
