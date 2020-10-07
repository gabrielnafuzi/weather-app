import styled from 'styled-components';
import { Navigation } from '@material-ui/icons';

export const Container = styled.section`
  width: 100%;
  margin-top: 5.1rem;

  padding: 0 2.4rem 4rem;

  > h1 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.8rem;
  }

  .wrapper {
    @media (min-width: 37.5rem) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 1.4rem;
      column-gap: 2rem;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: 3.2rem;
  padding: 3.2rem 4rem;

  background: var(--color-blue);

  h1 {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
    text-align: center;
  }

  h2 {
    font-weight: 700;
    font-size: 6.4rem;
    line-height: 7.5rem;

    span {
      font-weight: 500;
      font-size: 3.6rem;
      line-height: 4.3rem;
    }
  }
`;

export const NavigationStats = styled.div`
  width: 80px;
  margin-top: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.6rem;
  }
`;

export const IconBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: #ffffff33;
  border-radius: 50%;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const HumidityBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;
  width: 280px;

  @media (min-width: 37.5rem) and (max-width: 76.25rem) {
    width: 220px;
  }

  > span {
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.4rem;

    color: var(--color-text-gray);
    align-self: flex-end;
  }

  .numbers {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.6rem;

    span {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.4rem;

      color: var(--color-text-gray);
    }
  }

  .bar {
    width: 100%;
    height: 10px;

    background: var(--color-text-primary);
    border-radius: 0.8rem;
    margin-bottom: 0.6rem;

    > div {
      background: #ffec65;
      height: 100%;
      border-radius: 0.8rem;
    }
  }
`;

export const NavigationIcon = styled(Navigation)``;
