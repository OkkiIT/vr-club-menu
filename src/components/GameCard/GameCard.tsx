import React from 'react';

import { Link } from 'react-router-dom';
import { GameCardWrapper, ImageContainer, GameCardName, GameCardNameContainer } from './styled';

interface GameCardProps {
  imgLink: string;
  gameName: string;
  gameID: string;
}

const GameCard = ({ imgLink, gameName, gameID }: GameCardProps) => {
  return (
    <Link to={gameID}>
      <GameCardWrapper>
        <ImageContainer src={imgLink} />
        <GameCardNameContainer>
          <GameCardName>{gameName}</GameCardName>
        </GameCardNameContainer>
      </GameCardWrapper>
    </Link>
  );
};

export default GameCard;
