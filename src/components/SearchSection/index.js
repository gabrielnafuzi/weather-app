import React from 'react';
import Loading from '../Loading';

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
  LoadingBlock,
} from './styles';

const SearchSection = ({ setSearch, fetchData }) => {
  const [query, setQuery] = React.useState('');
  const [places, setPlaces] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${query}`
      );

      const json = await response.json();

      setPlaces(json);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
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

        {loading ? (
          <LoadingBlock>
            <Loading />
          </LoadingBlock>
        ) : (
          <ResultSearchBlock>
            {!places ||
              (!places.length && (
                <span>No results. Please modify your search and try again.</span>
              ))}

            {places && places.length > 0 && (
              <ItensList>
                {places.map(place => (
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
            )}
          </ResultSearchBlock>
        )}
      </div>
    </Container>
  );
};

export default SearchSection;
