import React from 'react';

import { ReactComponent as Sun } from '../../assets/icons/sun.svg';
import { ReactComponent as Cloud } from '../../assets/icons/cloud.svg';

import { Container, Wrapper, Rain, Text } from './styles';

const Loading = () => {
  const drops = Array.from({ length: 10 }).map((_, i) => i);

  return (
    <Container>
      <Wrapper>
        <Sun />
        <Cloud />

        <Rain>
          {drops.map(drop => (
            <span key={drop} className="drop" />
          ))}
        </Rain>
      </Wrapper>

      <Text>
        <span>Looking outside for you... One sec</span>
      </Text>
    </Container>
  );
};

export default Loading;
