import styled from 'styled-components';

export const Container = styled.div`
  width: 140px;
  height: 197px;
  background: var(--color-blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0.2rem 0.7rem;

  margin: 1.6rem 1.3rem;

  > h1 {
    font-weight: 500;
    font-size: 1.7rem;
    line-height: 1.878rem;
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const IconBlock = styled.div`
  width: 59px;
  height: 65px;

  margin-bottom: 3.1rem;
`;

export const MinMaxBlock = styled.div`
  width: 86px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 1.9rem;

    &.min {
      color: var(--color-text-gray);
    }
  }
`;
