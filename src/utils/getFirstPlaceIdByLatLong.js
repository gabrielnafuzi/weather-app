export default async function getFirstPlaceIdByLatLong(lat, long) {
  const response = await fetch(
    `https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}`
  );

  const json = await response.json();

  return json[0].woeid;
}
