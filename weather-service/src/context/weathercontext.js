import React from "react";
import { useReducer } from "react";
import AppContext from "./context";
import {
  initialStateWeather,
  WeatherReducer,
} from "../reducers/weatherReducer";

// context provider for weather
const WeatherProvider = ({ children }) => {
  const [stateWeather, dispatchWeather] = useReducer(
    WeatherReducer,
    initialStateWeather
  );

  return (
    <AppContext.Provider
      value={[stateWeather, dispatchWeather, initialStateWeather]}
    >
      {children}
    </AppContext.Provider>
  );
};

export default WeatherProvider;
