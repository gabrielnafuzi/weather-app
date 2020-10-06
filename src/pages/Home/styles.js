import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 61.25rem) {
    flex-direction: row;
    max-height: 100vh;
  }
`;
