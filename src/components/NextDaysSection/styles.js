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

  > div {
    opacity: 0;
    transform: translateX(-40px);
    animation: appear 0.4s forwards;

    @keyframes appear {
      50% {
        opacity: 0.5;
        transform: translateX(20px);
      }

      100% {
        opacity: 1;
        transform: translateX(0px);
      }
    }

    &:nth-child(1) {
      animation-duration: 0.6s;
    }

    &:nth-child(2) {
      animation-duration: 0.8s;
    }

    &:nth-child(3) {
      animation-duration: 1s;
    }

    &:nth-child(4) {
      animation-duration: 1.2s;
    }

    &:nth-child(5) {
      animation-duration: 1.4s;
    }
  }
`;
