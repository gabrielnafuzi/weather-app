import styled from 'styled-components';
import { Close, Search, NavigateNext } from '@material-ui/icons';

export const Container = styled.section`
  z-index: 8;
  width: 100%;
  height: 100vh;
  position: absolute;
  background: var(--color-blue);
  left: -100vw;
  top: 0;
  opacity: 0;
  animation: appear 0.5s forwards;

  .wrapper {
    width: 100%;
    padding: 1.7rem 1.2rem;
    display: flex;
    flex-direction: column;
  }

  @keyframes appear {
    to {
      left: 0;
      opacity: 1;
    }
  }

  @media (min-width: 57.5rem) {
    width: 30%;
  }

  @media (min-width: 74rem) {
    width: 28%;
    left: -38vw;

    .wrapper {
      padding: 2rem 4rem;
    }
  }
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  margin-bottom: 3rem;
  outline: none;

  cursor: pointer;

  > svg {
    width: 30px;
    height: 30px;
    transition: fill 0.2s ease;
  }

  &:hover svg {
    fill: var(--color-blue-light);
  }
`;

export const SearchLocationForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 3.8rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24.57%;
    height: 48px;

    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.878rem;
    border-radius: 0.2rem;

    color: var(--color-text-primary);
    background: var(--color-blue-light);

    outline: none;

    cursor: pointer;
  }
`;

export const InputBlock = styled.div`
  display: flex;
  align-items: center;

  width: 72%;
  max-height: 48px;
  border: 1px solid var(--color-text-primary);
  border-radius: 0.2rem;
  margin-right: 1.2rem;
  padding: 0.1rem 1.5rem;
  transition: border 0.4s ease;

  > svg {
    width: 20px;
    height: 20px;
    margin-right: 1.7rem;
    fill: var(--color-gray-dark);

    transition: fill 0.4s ease;
  }

  input {
    width: 100%;
    padding: 1.4rem 0;
    outline: none;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.878rem;
  }

  &:focus-within {
    border-color: var(--color-blue-light);

    svg {
      fill: var(--color-blue-light);
    }
  }
`;

export const ResultSearchBlock = styled.div`
  display: flex;
  width: 100%;
  max-height: 70vh;

  > span {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }
`;

export const ItensList = styled.ul`
  width: 100%;
  overflow-y: scroll;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.3rem 1.2rem;
    border: 1px solid transparent;
    transition: border 0.3s ease;

    width: 100%;

    span {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 1.9rem;
    }

    > svg {
      width: 24px;
      height: 24px;

      fill: var(--color-gray-dark);
    }

    &:hover {
      border-color: var(--color-gray-dark);
      > svg {
        fill: var(--color-text-primary);
      }

      cursor: pointer;
    }
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-text-primary);
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-blue-light);
    border-radius: 1rem;
  }
`;

export const LoadingBlock = styled.div`
  margin-top: 6rem;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchIcon = styled(Search)``;

export const CloseIcon = styled(Close)``;

export const ArrowRight = styled(NavigateNext)``;
