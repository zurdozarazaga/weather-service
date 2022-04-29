import React, { useContext, useState } from "react";
import getWeather from "../service/getWeather";
import AppContext from "../context/context";

const Zone = () => {
  const [stateWeather, dispatchWeather, initialStateWeather] =
    useContext(AppContext);
  const [stateError, setStateError] = useState({});
  console.log(stateWeather.message);
  const handleSubmitSearch = async (e) => {
    e.preventDefault();
    const { city, country } = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;
    dispatchWeather({
      type: "SET_LOADING",
      payload: true,
    });
    const resultWeather = await getWeather(cityValue, countryValue);
    console.log("zone: resultWeather", resultWeather);
    if (typeof resultWeather === "string") {
      dispatchWeather({
        type: "SET_ERROR",
        payload: resultWeather,
      });
      dispatchWeather({
        type: "SET_LOADING",
        payload: false,
      });
    } else {
      dispatchWeather({
        type: "SET_LOADING",
        payload: false,
      });
      dispatchWeather({
        type: "SET_WEATHER",
        payload: resultWeather,
      });
      dispatchWeather({
        type: "SET_ERROR",
        payload: "",
      });
    }
  };

  return (
    <div className="col-span-1 block ">
      <div className=" bg-white block ">
        <div className="flex justify-center items-center h-8 border-b-2 border-black">
          seleccione la zona
        </div>
        <div>
          <form onSubmit={handleSubmitSearch} className="block mt-2">
            <label className="w-full ml-3 block" htmlFor="">
              Ciudad
            </label>
            <input
              className="md:input md:w-11/12 p-1 pl-2 md:ml-3 md:mt-3 md:mb-2 border border-solid border-gray-300 rounded-lg"
              type="text"
              name="city"
              placeholder="Ingrese la ciudad"
            ></input>
            <label className="w-full ml-3 mt-2 block" htmlFor="">
              Pais
            </label>
            <input
              className="md:input md:w-11/12 p-1 pl-2 md:ml-3 md:mt-3 md:mb-2 border border-solid border-gray-300 rounded-lg"
              type="text"
              name="country"
              placeholder="Ingrese el Pais"
            ></input>
            <button className="md:w-11/12 md:p-1 md:ml-3 md:mt-6 md:mb-2 text-white flex p-1 mt-2 mb-4 justify-center bg-blue-500 hover:bg-blue-600 rounded-lg w-full">
              BUSCAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Zone;
