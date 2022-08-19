import React from 'react';

import { GameCardWrapper, ImageContainer, GameCardName, GameCardNameContainer } from './styled';
import { Link } from 'react-router-dom';

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
