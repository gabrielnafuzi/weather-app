import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 110px;
  position: relative;
  margin-bottom: 12rem;

  svg {
    width: 110px;
    height: 110px;
  }

  path {
    stroke: #9ea1a4;
    stroke-width: 0.25;
    fill: #241e20;
  }

  #cloud {
    position: absolute;
    z-index: 2;
  }

  #cloud path {
    fill: #efefef;
  }

  #sun {
    width: 60px;
    height: 60px;
    position: absolute;
    left: 44px;
    top: 14px;
    z-index: 1;

    animation-name: rotate;
    animation-duration: 16000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  #sun path {
    stroke-width: 0.18;
    fill: #ffec65;
  }

  @keyframes rotate {
    0% {
      transform: rotateZ(0deg);
    }

    100% {
      transform: rotateZ(360deg);
    }
  }
`;

export const Rain = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  top: 80px;
  left: 18px;

  span {
    opacity: 1;
    background: #9ea1a4;
    display: block;
    float: left;
    width: 3px;
    height: 10px;
    margin-left: 4px;
    border-radius: 0px 0px 6px 6px;

    animation-name: drop;
    animation-duration: 350ms;
    animation-iteration-count: infinite;

    @keyframes drop {
      50% {
        height: 45px;
        opacity: 0;
      }

      51% {
        opacity: 0;
      }

      100% {
        height: 1px;
        opacity: 0;
      }
    }

    &:nth-child(1) {
      animation-delay: -130ms;
    }

    &:nth-child(2) {
      animation-delay: -240ms;
    }

    &:nth-child(3) {
      animation-delay: -390ms;
    }

    &:nth-child(4) {
      animation-delay: -525ms;
    }

    &:nth-child(5) {
      animation-delay: -640ms;
    }

    &:nth-child(6) {
      animation-delay: -790ms;
    }

    &:nth-child(7) {
      animation-delay: -900ms;
    }

    &:nth-child(8) {
      animation-delay: -1050ms;
    }

    &:nth-child(9) {
      animation-delay: -1130ms;
    }

    &:nth-child(10) {
      animation-delay: -1300ms;
    }
  }
`;

export const Text = styled.div`
  width: max-content;
  margin-top: 1rem;

  span {
    letter-spacing: 0.1rem;
    text-align: center;
    font-weight: bold;
    font-size: 1.3rem;
    color: var(--color-text-gray);
  }
`;
