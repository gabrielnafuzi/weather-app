import React from 'react';

import TodaySection from '../../components/TodaySection';
import NextDaysSection from '../../components/NextDaysSection';
import TodayHighlightsSection from '../../components/TodayHighlightsSection';
import Loading from '../../components/Loading';
import { getFirstPlaceIdByLatLong } from '../../utils';

import { Container, LeftSide, RightSide, LoadingBlock } from './styles';

const Home = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [degreeType, setDegreeType] = React.useState(
    window.localStorage.getItem('degreeType') || 'celsius'
  );

  async function fetchData(placeId) {
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/${placeId}/`
      );

      const json = await response.json();

      setData(json);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    const latitude = window.localStorage.getItem('latitude');
    const longitude = window.localStorage.getItem('longitude');

    if (latitude && longitude) {
      (async () => {
        const placeId = await getFirstPlaceIdByLatLong(latitude, longitude);

        fetchData(placeId);
      })();
    } else {
      fetchData(2459115);
    }
  }, []);

  if (loading) {
    return (
      <LoadingBlock>
        <Loading />
      </LoadingBlock>
    );
  }

  return (
    <Container>
      {data && (
        <>
          <LeftSide>
            <TodaySection
              today={data.consolidated_weather[0]}
              fetchData={fetchData}
              title={data.title}
              degreeType={degreeType}
            />
          </LeftSide>

          <RightSide>
            <header>
              <button
                className={`celsius ${degreeType === 'celsius' && 'active'}`}
                onClick={() => {
                  setDegreeType('celsius');
                  window.localStorage.setItem('degreeType', 'celsius');
                }}
              >
                ℃
              </button>
              <button
                className={`fahrenheit ${degreeType === 'fahrenheit' && 'active'}`}
                onClick={() => {
                  setDegreeType('fahrenheit');
                  window.localStorage.setItem('degreeType', 'fahrenheit');
                }}
              >
                ℉
              </button>
            </header>
            <NextDaysSection
              days={data.consolidated_weather.slice(
                1,
                data.consolidated_weather.length
              )}
              degreeType={degreeType}
            />
            <TodayHighlightsSection today={data.consolidated_weather[0]} />
          </RightSide>
        </>
      )}
    </Container>
  );
};

export default Home;
