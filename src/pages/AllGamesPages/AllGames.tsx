import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
  console.log(data)
  return (
    <Wrapper>
      <MenuContainer>
        <ButtonContainer>
          <LinkButton to={'/'}/>
        </ButtonContainer>
        <AgeFilter>
          <LabelForToggle>Для детей</LabelForToggle>
          <ToggleInput onChange={() => setForKidsOnly(!forKidsOnly)} type="checkbox" id="switch" />
          <ToggleLabel htmlFor="switch" />
        </AgeFilter>
      </MenuContainer>
      <GamesWrapper>
        {data?.map((item:any) => (
          <GameCard gameID={item.id} imgLink={item.imgLink} gameName={item.name} />
        ))}
      </GamesWrapper>
    </Wrapper>
  );
};

export default AllGamesPage;
