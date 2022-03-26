import React, { useContext, useState, useEffect } from "react";
import AppContext from "../context/context";
import getWeather from "../service/getWeather";

const Report = ({ cityValue, countryValue }) => {
  const [stateWeather, dispatchWeather, initialStateWeather] =
    useContext(AppContext);
  const [weather, setWeather] = useState(initialStateWeather);
  console.log("state weather in report", stateWeather);
  console.log("state weather in report", weather);
  const name = weather.state.name;
  const country = weather.state.sys.country;
  const description = weather.state.weather[0].description;
  const temp = weather.state.main.temp;
  const fahrenheit = ((weather.state.main.temp * 9 / 5) + 32).toFixed(1);
  const image = `http://openweathermap.org/img/wn/${weather.state.weather[0].icon}@2x.png`;
  const precip = weather.state.weather[0].main;
  const humidity = weather.state.main.humidity;
  const wind = weather.state.wind.speed;

  useEffect(() => {
    setWeather(stateWeather);
  }, [stateWeather]);
  // const fecha = new Date(stateWeather.state.dt * 1000);
  // console.log(fecha);
  // const diaActual = fecha.getDate();
  // console.log(diaActual);

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 bg-white pl-4 pr-4">
      <div className=" md:col-span-2 flex justify-center items-center h-8 border-b-2 border-black">
        Reporte del Tiempo
      </div>
      <div className="col-span-1 block">
        <div>
          <h3 className="text-gray-400">{name}</h3>
        </div>
        <div>
          <h1 className="text-gray-400 text-2xl mt-2">{country}</h1>
        </div>
        <div className="text-gray-900 text-3xl mt-2">VIERNES</div>
        <div className="text-gray-900 text-2xl mt-2">{description}</div>
        <div className="text-gray-900 text-5xl mt-2">{`${temp} °C`}</div>
        <div className="text-gray-900 text-xl mt-2">{`${fahrenheit} °F`}</div>
      </div>
      <div className="col-span-1 block">
        <div>
          <img src={image} alt="icon clima"></img>
        </div>
        <div className="text-gray-900 text-base mt-2">
          prob de precipitaciones: 0%
        </div>
        <div className="text-gray-900 text-base mt-2">
          {`Humedad: ${humidity} %`}
        </div>
        <div className="text-gray-900 text-base mt-2">
          {`Viento: ${wind} km/h`}
        </div>
      </div>
    </div>
  );
};

export default Report;
