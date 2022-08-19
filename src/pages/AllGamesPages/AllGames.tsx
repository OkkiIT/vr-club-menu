import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Wrapper,
  MenuContainer,
  AgeFilter,
  ButtonContainer,
  ToggleInput,
  ToggleLabel,
  LabelForToggle,
  GamesWrapper,
} from './styled';
import { GameCard, LinkButton } from 'components';
import { useGetAllGamesQuery } from 'store/api-slices/games-slice';

const AllGamesPage = () => {
  const params = useParams();
  const [forKidsOnly, setForKidsOnly] = useState(false);

  const { data } = useGetAllGamesQuery({ ...params, age: forKidsOnly ? 'kid' : 'adult' });
  const gamesArr = data ? data : [];

  const toggleAgeFilter = () => setForKidsOnly((prev) => !prev);
  return (
    <Wrapper>
      <MenuContainer>
        <ButtonContainer>
          <LinkButton to={'/'} />
        </ButtonContainer>
        <AgeFilter>
          <LabelForToggle>Для детей</LabelForToggle>
          <ToggleInput onChange={toggleAgeFilter} type="checkbox" id="switch" />
          <ToggleLabel htmlFor="switch" />
        </AgeFilter>
      </MenuContainer>
      <GamesWrapper>
        {gamesArr.map((item) => (
          <GameCard gameID={item.id} imgLink={item.imgLink} gameName={item.name} />
        ))}
      </GamesWrapper>
    </Wrapper>
  );
};

export default AllGamesPage;
