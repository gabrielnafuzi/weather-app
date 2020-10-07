import React from 'react';

import {
  Container,
  Card,
  NavigationStats,
  IconBlock,
  NavigationIcon,
  HumidityBar,
} from './styles';

const TodayHighlightsSection = ({ today }) => {
  return (
    <Container>
      <h1>Today's Highlights</h1>

      <div className="wrapper">
        <Card>
          <h1>Wind status</h1>
          <h2>
            {Math.round(today.wind_speed)}
            <span>mph</span>
          </h2>

          <NavigationStats>
            <IconBlock>
              <NavigationIcon
                style={{
                  transform: `rotate(${Math.round(today.wind_direction)}deg)`,
                }}
              />
            </IconBlock>

            <span>{today.wind_direction_compass}</span>
          </NavigationStats>
        </Card>

        <Card>
          <h1>Humidity</h1>
          <h2>
            {today.humidity} <span>%</span>
          </h2>

          <HumidityBar>
            <div className="numbers">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>

            <div className="bar">
              <div style={{ width: `${today.humidity}%` }} />
            </div>

            <span>%</span>
          </HumidityBar>
        </Card>

        <Card>
          <h1>Visibility</h1>
          <h2>
            {today.visibility.toFixed(2)}
            <span>miles</span>
          </h2>
        </Card>

        <Card>
          <h1>Air Pressure</h1>
          <h2>
            {today.air_pressure}
            <span>mb</span>
          </h2>
        </Card>
      </div>
    </Container>
  );
};

export default TodayHighlightsSection;
