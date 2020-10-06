import React from 'react';

import Shower from '../../assets/icons/Shower.png';

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

const TodaySection = () => {
  return (
    <Container>
      <div className="wrapper">
        <CloudsBackground />
        <HeaderBlock>
          <SearchButton>Search for places</SearchButton>

          <GpsButton>
            <GpsIcon />
          </GpsButton>
        </HeaderBlock>

        <MainBlock>
          <WeatherIconBlock>
            <img src={Shower} alt="Shower" />
          </WeatherIconBlock>

          <WeatherDescription>
            <h1>
              15
              <span>℃</span>
            </h1>
            <h2>Shower</h2>

            <p>
              <span>Today</span>
              <span>•</span>
              <span>Fri, 5 Jun</span>
            </p>

            <LocationBlock>
              <LocationIcon />
              <span>Helsinki</span>
            </LocationBlock>
          </WeatherDescription>
        </MainBlock>
      </div>
    </Container>
  );
};

export default TodaySection;
