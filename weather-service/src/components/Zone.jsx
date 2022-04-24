import React, { useContext } from "react";
import getWeather from "../service/getWeather";
import AppContext from "../context/context";

const Zone = () => {
  const [stateWeather, dispatchWeather, initialStateWeather] =
    useContext(AppContext);

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
    dispatchWeather({
      type: "SET_WEATHER",
      payload: resultWeather,
    });
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
              placeholder="Ciudad"
            ></input>
            <label className="w-full ml-3 mt-2 block" htmlFor="">
              Pais
            </label>
            <input
              className="md:input md:w-11/12 p-1 pl-2 md:ml-3 md:mt-3 md:mb-2 border border-solid border-gray-300 rounded-lg"
              type="text"
              name="country"
              placeholder="Pais"
            ></input>
            <button className="md:w-11/12 md:p-1 md:ml-3 md:mt-6 md:mb-2 text-white flex p-1 mt-2 mb-4 justify-center bg-red-500 rounded-lg w-full">
              BUSCAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Zone;
