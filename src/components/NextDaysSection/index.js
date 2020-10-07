import React from 'react';
import DayCard from '../DayCard';

import { Container } from './styles';

const NextDaysSection = () => {
  return (
    <Container>
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
    </Container>
  );
};

export default NextDaysSection;
