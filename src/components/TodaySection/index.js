import React from 'react';

import SearchSection from '../SearchSection';
import getFormattedDate from '../../utils/getFormattedDate';

import {
  Container,
  HeaderBlock,
  SearchButton,
  GpsButton,
  GpsIcon,
  MainBlock,
  WeatherIconBlock,
  WeatherDescription,
  LocationBlock,
  LocationIcon,
  CloudsBackground,
} from './styles';

const TodaySection = ({ today, fetchData, title }) => {
  const [search, setSearch] = React.useState(false);

  return (
    <>
      <Container>
        <div className="wrapper">
          <CloudsBackground />
          <HeaderBlock>
            <SearchButton onClick={() => setSearch(true)}>
              Search for places
            </SearchButton>

            <GpsButton>
              <GpsIcon />
            </GpsButton>
          </HeaderBlock>

          {today && (
            <MainBlock>
              <WeatherIconBlock>
                <img
                  src={`https://www.metaweather.com/static/img/weather/${today.weather_state_abbr}.svg`}
                  alt={today.weather_state_name}
                />
              </WeatherIconBlock>

              <WeatherDescription>
                <h1>
                  {Math.round(today.the_temp)}
                  <span>℃</span>
                </h1>
                <h2>{today.weather_state_name}</h2>

                <p>
                  <span>Today</span>
                  <span>•</span>
                  <span>{getFormattedDate(today.applicable_date)}</span>
                </p>

                <LocationBlock>
                  <LocationIcon />
                  <span>{title}</span>
                </LocationBlock>
              </WeatherDescription>
            </MainBlock>
          )}
        </div>
      </Container>
      {search && <SearchSection setSearch={setSearch} fetchData={fetchData} />}
    </>
  );
};

export default TodaySection;
