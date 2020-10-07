import React from 'react';

import {
  Container,
  CloseButton,
  CloseIcon,
  SearchLocationForm,
  InputBlock,
  SearchIcon,
  ResultSearchBlock,
  ItensList,
  ArrowRight,
} from './styles';

const SearchSection = ({ setSearch, fetchData }) => {
  const [query, setQuery] = React.useState('');
  const [places, setPlaces] = React.useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${query}`
    );

    const json = await response.json();

    setPlaces(json);
  }

  return (
    <Container>
      <div className="wrapper">
        <CloseButton onClick={() => setSearch(false)}>
          <CloseIcon />
        </CloseButton>
        <SearchLocationForm onSubmit={handleSubmit}>
          <InputBlock>
            <SearchIcon />
            <input
              type="text"
              placeholder="Search location"
              value={query}
              onChange={({ target }) => setQuery(target.value)}
            />
          </InputBlock>

          <button type="submit">Search</button>
        </SearchLocationForm>

        <ResultSearchBlock>
          <ItensList>
            {places &&
              places.map(place => (
                <li
                  key={place.woeid}
                  onClick={() => {
                    setSearch(false);
                    fetchData(place.woeid);
                  }}
                >
                  <span>{place.title}</span>
                  <ArrowRight />
                </li>
              ))}
          </ItensList>
        </ResultSearchBlock>
      </div>
    </Container>
  );
};

export default SearchSection;
