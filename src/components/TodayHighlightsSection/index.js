import React from 'react';

import {
  Container,
  Card,
  NavigationStats,
  IconBlock,
  NavigationIcon,
  HumidityBar,
} from './styles';

const TodayHighlightsSection = () => {
  return (
    <Container>
      <h1>Today's Highlights</h1>

      <div className="wrapper">
        <Card>
          <h1>Wind status</h1>
          <h2>
            7<span>mph</span>
          </h2>

          <NavigationStats>
            <IconBlock>
              <NavigationIcon style={{ transform: 'rotate(-150deg)' }} />
            </IconBlock>

            <span>WSW</span>
          </NavigationStats>
        </Card>

        <Card>
          <h1>Humidity</h1>
          <h2>
            84 <span>%</span>
          </h2>

          <HumidityBar>
            <div className="numbers">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>

            <div className="bar">
              <div style={{ width: '87%' }}></div>
            </div>

            <span>%</span>
          </HumidityBar>
        </Card>

        <Card>
          <h1>Visibility</h1>
          <h2>
            6,4<span>miles</span>
          </h2>
        </Card>

        <Card>
          <h1>Air Pressure</h1>
          <h2>
            998<span>mb</span>
          </h2>
        </Card>
      </div>
    </Container>
  );
};

export default TodayHighlightsSection;
