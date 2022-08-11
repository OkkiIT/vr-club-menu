import React from 'react';

import { MainPageContainer } from './styled';
import { Activity } from '../../components';

const MainPage = () => {
  return (
    <MainPageContainer>
      <Activity activityType={'vr'} activityName="VR" inverted={true} />
      <Activity activityType={'playstation'} activityName="Playstation 4 Pro" />
    </MainPageContainer>
  );
};

export default MainPage;
