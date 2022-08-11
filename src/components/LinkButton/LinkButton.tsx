import React, { CSSProperties } from 'react';

import { StyledButton } from './styled';
import { Link } from 'react-router-dom';

interface LinkButtonProps {
  style?: CSSProperties;
  to: string;
}

const LinkButton = ({ style, to }: LinkButtonProps) => {
  return (
    <Link to={to}>
      <StyledButton style={style}>&lt;</StyledButton>
    </Link>
  );
};

export default LinkButton;
