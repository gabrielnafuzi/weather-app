import React from 'react';

import TodaySection from '../../components/TodaySection';
import NextDaysSection from '../../components/NextDaysSection';

import {
  Container,
  LeftSide,
  RightSide,
  
} from './styles';

const Home = () => {
  return (
    <Container>
      <LeftSide>
        <TodaySection />
      </LeftSide>

      <RightSide>
        <header>
          <button className="celsius active">℃</button>
          <button className="fahrenheit">℉</button>
        </header>
        <NextDaysSection />
      </RightSide>
    </Container>
  );
};

export default Home;
