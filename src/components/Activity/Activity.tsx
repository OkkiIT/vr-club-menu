import React from 'react';

import { First, Second, ActivityWrapper, ButtonContainer } from './Styled';
import ActivityButton from '../ActivityButton';

interface IActivityProps {
  inverted?: boolean;
  activityName: string;
  activityType: string;
}

const Activity = ({ inverted, activityName, activityType }: IActivityProps) => {
  return (
    <ActivityWrapper>
      <First inverted={inverted}>
        <h1>{activityName}</h1>
      </First>
      <Second inverted={inverted}>
        <ButtonContainer>
          <ActivityButton
            link={`/${activityType}/solo`}
            title="1 Игрок"
          />
          <ActivityButton
            link={`/${activityType}/coop`}
            title="2 Игрока"
          />
        </ButtonContainer>
      </Second>
    </ActivityWrapper>
  );
};

export default Activity;
