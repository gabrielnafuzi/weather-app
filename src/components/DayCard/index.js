import React from 'react';
import { getFormattedDate, toFahrenheit } from '../../utils';

import { Container, IconBlock, MinMaxBlock } from './styles';

const DayCard = ({ day, isTomorrow, degreeType }) => {
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
        <span className="max">
          {degreeType === 'celsius'
            ? Math.round(day.max_temp)
            : toFahrenheit(day.max_temp)}

          {degreeType === 'celsius' ? '℃' : '℉'}
        </span>

        <span className="min">
          {degreeType === 'celsius'
            ? Math.round(day.min_temp)
            : toFahrenheit(day.min_temp)}

          {degreeType === 'celsius' ? '℃' : '℉'}
        </span>
      </MinMaxBlock>
    </Container>
  );
};

export default DayCard;
