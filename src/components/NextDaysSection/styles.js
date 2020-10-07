import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (min-width: 57.5rem) {
    flex-wrap: nowrap;
  }
`;
