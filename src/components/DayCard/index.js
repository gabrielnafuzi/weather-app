import React from 'react';
import { getFormattedDate } from '../../utils';

import { Container, IconBlock, MinMaxBlock } from './styles';

const DayCard = ({ day, isTomorrow }) => {
  return (
    <Container>
      <h1>{isTomorrow ? 'Tomorrow' : getFormattedDate(day.applicable_date)}</h1>

      <IconBlock>
        <img
          src={`https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`}
          alt={day.weather_state_name}
        />
      </IconBlock>

      <MinMaxBlock>
        <span className="max">{Math.round(day.max_temp)}°C</span>

        <span className="min">{Math.round(day.min_temp)}°C</span>
      </MinMaxBlock>
    </Container>
  );
};

export default DayCard;
