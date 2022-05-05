import React, { useContext, useState, useEffect } from "react";
import Helmet from "react-helmet";
import AppContext from "../context/context";
import useWeatherDate from "../hooks/useWeatherDate";
import getWeather from "../service/getWeather";
import LayoutHelmet from "./LayoutHelmet";
import Spinner from "./Spinner";

const Report = () => {
  const [stateweather, setStateWeather] = useState({});
  

  const weatherData = useWeatherDate();
  
  const {
    country,
    name,
    day,
    description,
    temp,
    fahrenheit,
    image,
    humidity,
    wind,
    loading,
    error,
  } = weatherData;

  if (weatherData) {
  }
  return (
    <>
      <LayoutHelmet
        title={`${name} ${temp ? temp : ""} °C`}
        description={"Aplicación para buscar los datos del tiempo en tu ciudad"}
      />
      {error && <div className="text-center text-red-600">{error}</div>}
      {loading && <Spinner />}
      {!loading && !error && (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 bg-trnsparent pl-4 pr-4">
          <div className=" md:col-span-2 flex justify-center text-gray-400 items-center h-8 border-b-2 border-black">
            <h2>Reporte del Tiempo</h2>
          </div>
          <div className="col-span-1 block">
            <div>
              <h3 className="text-gray-400">{country}</h3>
            </div>
            <div>
              <h1 className="text-gray-400 text-2xl mt-2">{name}</h1>
            </div>
            <div className="text-gray-400 text-3xl mt-2">{day}</div>
            <div className="text-gray-400 text-2xl mt-2">{description}</div>
            <div className="text-gray-400 text-5xl mt-2">{`${temp} °C`}</div>
            <div className="text-gray-400 text-xl mt-2">{`${fahrenheit} °F`}</div>
          </div>
          <div className="col-span-1 block">
            <div>
              <img src={image} alt="icon clima"></img>
            </div>
            <div className="text-gray-400 text-base mt-2">
              prob de precipitaciones: 0%
            </div>
            <div className="text-gray-400 text-base mt-2">
              {`Humedad: ${humidity} %`}
            </div>
            <div className="text-gray-400 text-base mt-2">
              {`Viento: ${wind} km/h`}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Report;
