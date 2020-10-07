import React from 'react';

import Sleet from '../../assets/icons/Sleet.png';

import { Container, IconBlock, MinMaxBlock } from './styles';

const DayCard = () => {
  return (
    <Container>
      <h1>Tomorrow</h1>

      <IconBlock>
        <img src={Sleet} alt="Sleet" />
      </IconBlock>

      <MinMaxBlock>
        <span className="max">16°C</span>

        <span className="min">11°C</span>
      </MinMaxBlock>
    </Container>
  );
};

export default DayCard;
