import styled from 'styled-components';
import { LocationOn, GpsFixed } from '@material-ui/icons';
import CloudBackground from '../../assets/icons/Cloud-background.png';

export const Container = styled.section`
  display: flex;
  height: 100vh;
  padding: 1.8rem 1.1rem;
  background: var(--color-blue);

  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 1;
  }

  @media (min-width: 74rem) {
    padding: 2.2rem;
  }
`;

export const HeaderBlock = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchButton = styled.div`
  width: 161px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-gray);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.2rem;

  font-size: 1.6rem;
  line-height: 1.878rem;

  transition: 0.3s ease;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--color-blue-light);
  }
`;

export const GpsButton = styled.button`
  width: 40px;
  height: 40px;
  background: #646775;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border-radius: 50%;
  transition: 0.3s ease;

  cursor: pointer;

  > svg {
    width: 22px;
    height: 22px;
  }

  &:hover,
  &:focus {
    background-color: var(--color-blue-light);
  }
`;

export const MainBlock = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 7.6rem;
`;

export const WeatherIconBlock = styled.div`
  width: 150px;
  height: 174px;

  margin-bottom: 4rem;
`;

export const WeatherDescription = styled.div`
  text-align: center;

  h1 {
    font-size: 14.4rem;
    font-weight: 500;
    line-height: 16.906rem;
    margin-bottom: 2.3rem;

    span {
      font-size: 4.8rem;
      font-weight: 100;
      color: var(--color-text-gray);
      line-height: 5.635rem;
    }
  }

  h2 {
    color: var(--color-text-gray);
    font-size: 3.6rem;
    font-weight: 600;
    line-height: 4.226rem;

    margin-bottom: 4.8rem;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto 3.4rem;
    width: 163px;

    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.1rem;

    span {
      color: var(--color-text-secondary);
    }
  }
`;

export const LocationBlock = styled.div`
  display: flex;
  align-items: center;
  max-width: max-content;
  margin: 0 auto;

  > svg {
    width: 14px;
    height: 19.47px;
    margin-right: 0.9rem;
    fill: var(--color-text-secondary);
  }

  span {
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2.113rem;
    color: var(--color-text-secondary);
  }
`;

export const CloudsBackground = styled.div`
  width: 100%;
  height: calc(100vh - 6rem);
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  margin-top: 6rem;
  background: url(${CloudBackground}) no-repeat center top;
  background-size: contain;
  opacity: 0.1;
  overflow-x: hidden;
  animation: moving 30s infinite linear;

  @keyframes moving {
    0%,
    100% {
      transform: translateX(-100%);
    }

    50% {
      transform: translateX(100%);
    }
  }

  @media (min-width: 57.5rem) {
    width: 30%;
  }

  @media (min-width: 74rem) {
    width: 28%;
  }
`;

export const GpsIcon = styled(GpsFixed)``;

export const LocationIcon = styled(LocationOn)``;
