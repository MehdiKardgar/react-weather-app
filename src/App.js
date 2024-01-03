import Search from "./components/search/search";

import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useState } from "react";

function App() {
  // I wan to create a hook to store "weatherResponse" and "forecastResponse"
  const [currentWeather, setcurrentWeather] = useState(null);
  const [forecast, setforecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    // start searching data that we have
    const [lat, lon] = searchData.value.split(" "); //   lat = city.latitude & lon = city.longitude}`,

    // because we are gonna fetch two API calls
    // the first one is "current weather"
    // and the second one is "Forecast"
    // we're going to use the "promis.all"
    // in order to fetch the both of these

    // the first API come from "openweathermap.org"
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    // the second API come from "openweathermap.org"
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (Response) => {
        const weatherResponse = await Response[0].json();
        const forecastResponse = await Response[1].json();

        setcurrentWeather({ city: searchData.label, ...weatherResponse });
        setforecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log("currentWeather");
  console.log(currentWeather);
  console.log("forecast");
  console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />

      <CurrentWeather />
    </div>
  );
}

export default App;
