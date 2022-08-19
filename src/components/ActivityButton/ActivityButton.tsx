import React from 'react';

import { Button, StyledSpan, StyledSvg, Center, Container } from './styled';
import { Link } from 'react-router-dom';

interface ActivityButtonProps {
  title: string;
  link: string;
}

const ActivityButton = ({ title, link }: ActivityButtonProps) => {
  return (
    <Container>
      <Center>
        <Link to={link}>
          <Button>
            <StyledSvg width="180px" height="60px" viewBox="0 0 180 60" className="border">
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
            </StyledSvg>
            <StyledSpan>{title}</StyledSpan>
          </Button>
        </Link>
      </Center>
    </Container>
  );
};

export default ActivityButton;
