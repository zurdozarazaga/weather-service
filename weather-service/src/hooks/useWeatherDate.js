import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/context';

function useWeatherDate() {
  //useContext of weather
  const [stateWeather, dispatchWeather, initialStateWeather] =
    useContext(AppContext);

    //state to update data
  const [weather, setWeather] = useState(initialStateWeather);
  // data
  const name = weather.state.name;
  const country = weather.state.sys.country;
  const fecha = new Date(weather.state.dt * 1000);
  const day = fecha
    .toLocaleDateString("es-ES", { weekday: "long" })
    .toUpperCase();
  const description = weather.state.weather[0].description;
  const temp = Math.round(weather.state.main.temp);
  const fahrenheit = ((weather.state.main.temp * 9) / 5 + 32).toFixed(1);
  const image = `http://openweathermap.org/img/wn/${weather.state.weather[0].icon}@2x.png`;
  const precip = weather.state.weather[0].main;
  const humidity = weather.state.main.humidity;
  const wind = Math.round(weather.state.wind.speed);
  const loading = weather.loading;
  const error = weather.error;

  // useEffect to get data
  useEffect(() => {

    setWeather(stateWeather);
  
  //   });
  }, [stateWeather]);
  return{
    name,
    country,
    day,
    description,
    temp,
    fahrenheit,
    image,
    precip,
    humidity,
    wind,
    loading,
    error,
  }
}

export default useWeatherDate;