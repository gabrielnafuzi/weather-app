import React from 'react';
import DayCard from '../DayCard';

import { Container } from './styles';

const NextDaysSection = ({ days }) => {
  return (
    <Container>
      {days.map((day, idx) => (
        <DayCard key={day.id} day={day} isTomorrow={!idx} />
      ))}
    </Container>
  );
};

export default NextDaysSection;
