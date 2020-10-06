import React from 'react';

import {
  Container,
  CloseButton,
  CloseIcon,
  SearchLocationForm,
  InputBlock,
  SearchIcon,
  SearchButton,
  ResultSearchBlock,
  ItensList,
  ArrowRight,
} from './styles';

const SearchSection = ({ setSearch }) => {
  return (
    <Container>
      <div className="wrapper">
        <CloseButton onClick={() => setSearch(false)}>
          <CloseIcon />
        </CloseButton>
        <SearchLocationForm>
          <InputBlock>
            <SearchIcon />
            <input type="text" placeholder="Search location" />
          </InputBlock>

          <SearchButton type="submit">Search</SearchButton>
        </SearchLocationForm>

        <ResultSearchBlock>
          <ItensList>
            <li>
              <span>London</span>
              <ArrowRight />
            </li>
            <li>
              <span>Barcelona</span>
              <ArrowRight />
            </li>
            <li>
              <span>Long Beach</span>
              <ArrowRight />
            </li>
          </ItensList>
        </ResultSearchBlock>
      </div>
    </Container>
  );
};

export default SearchSection;
