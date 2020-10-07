import React from 'react';

import TodaySection from '../../components/TodaySection';
import NextDaysSection from '../../components/NextDaysSection';

import { Container, LeftSide, RightSide } from './styles';
import TodayHighlightsSection from '../../components/TodayHighlightsSection';

const Home = () => {
  const [data, setData] = React.useState(null);

  async function fetchData(placeId) {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${placeId}/`
    );

    const json = await response.json();

    setData(json);
  }

  React.useEffect(() => {
    fetchData(2459115);
  }, []);

  return (
    <Container>
      {data ? (
        <>
          <LeftSide>
            <TodaySection
              today={data.consolidated_weather[0]}
              fetchData={fetchData}
              title={data.title}
            />
          </LeftSide>

          <RightSide>
            <header>
              <button className="celsius active">℃</button>
              <button className="fahrenheit">℉</button>
            </header>
            <NextDaysSection
              days={data.consolidated_weather.slice(
                1,
                data.consolidated_weather.length
              )}
            />
            <TodayHighlightsSection today={data.consolidated_weather[0]} />
          </RightSide>
        </>
      ) : (
        <span>Loading...</span>
      )}
    </Container>
  );
};

export default Home;
