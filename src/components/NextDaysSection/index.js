import React from 'react';
import DayCard from '../DayCard';

import { Container } from './styles';

const NextDaysSection = ({ days }) => {
  return (
    <Container>
      {days.map(day => (
        <DayCard key={day.id} day={day} />
      ))}
    </Container>
  );
};

export default NextDaysSection;
