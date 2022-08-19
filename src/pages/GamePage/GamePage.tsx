import React from 'react';
import { useGetAllGamesQuery } from 'store/api-slices/games-slice';
import { useParams } from 'react-router-dom';
import { LinkButton } from 'components';

import {
  LinkButtonContainer,
  GameCardContainer,
  GameCardWrapper,
  GameNameContainer,
  GameDescription,
  PlayerContainer,
} from './styled';
import YouTubePlayer from 'react-player/youtube';

const GamePage = () => {
  const { id, activity, type } = useParams();
  const { data } = useGetAllGamesQuery({ id });
  const game = data && data[0];

  return (
    <>
      <LinkButtonContainer>
        <LinkButton to={`/${activity}/${type}`} />
      </LinkButtonContainer>
      <GameCardWrapper>
        <GameCardContainer>
          <GameNameContainer>{game?.name}</GameNameContainer>
          <GameDescription>{game?.description}</GameDescription>
          <PlayerContainer>
            <YouTubePlayer
              width="100%"
              controls={true}
              className="react-player"
              playing={false}
              url={game?.youtubeLink}
            />
          </PlayerContainer>
        </GameCardContainer>
      </GameCardWrapper>
    </>
  );
};

export default GamePage;
