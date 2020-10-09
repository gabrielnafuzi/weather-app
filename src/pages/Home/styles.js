import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 57.5rem) {
    flex-direction: row;
    max-height: 100vh;
  }
`;

export const LeftSide = styled.div`
  width: 100%;
  overflow-y: hidden;

  @media (min-width: 57.5rem) {
    width: 30%;
  }

  @media (min-width: 74rem) {
    width: 28%;
  }
`;

export const RightSide = styled.div`
  z-index: 2;
  background: var(--color-background);
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 2rem;

  header {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3.6rem;
    padding-right: 7rem;

    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;

      font-weight: 700;
      font-size: 1.8rem;
      line-height: 2.1rem;
      text-align: center;
      transition: 0.2s ease;
      outline: none;
      background: #585676;

      cursor: pointer;

      &:hover {
        transform: translateY(-2px);
      }

      &.celsius {
        margin-right: 1.2rem;
      }

      &.active {
        background: var(--color-text-primary);

        color: #110e3c;
      }
    }
  }

  @media (min-width: 57.5rem) {
    width: 70%;
    padding: 2rem 1rem;
    overflow-y: scroll;
  }

  @media (min-width: 74rem) {
    width: 72%;
  }
`;

export const LoadingBlock = styled.div`
  width: 100%;
  height: 100%;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
`;
