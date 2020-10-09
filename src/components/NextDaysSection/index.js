import React from 'react';
import DayCard from '../DayCard';

import { Container } from './styles';

const NextDaysSection = ({ days, degreeType }) => {
  return (
    <Container>
      {days.map((day, idx) => (
        <DayCard key={day.id} day={day} isTomorrow={!idx} degreeType={degreeType} />
      ))}
    </Container>
  );
};

export default NextDaysSection;
