import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Sesion = () => {
  const [windowActive, setWindowActive] = React.useState(false);

  const handleClickSesion = () => {
    setWindowActive(!windowActive);
  };
  return (
    <div className=" hover:bg-red-600  text-lg md:mb-2 md:relative border border-solid md:mt-4 md:mr-8 bg-gray-50 md:bg-red-500 border-gray-300 md:rounded ">
      <div className="md:flex md:mr-3 md:items-center ">
        <div className=" bg-gray-50 md:bg-red-500 m-3 md:m-1 md:mr-2	border-gray-300 rounded-lg">
          <span
            onClick={handleClickSesion}
            className=" flex justify-center md:hover:bg-red-600 md:text-white text-black cursor-pointer"
          >
            Iniciar Sesión
          </span>
          <div
            className={
              windowActive
                ? "block md:mr-88  md:mt-1 md:fixed md:right-8 md:h-44 w-80 md:shadow-sm md:z-10 md:bg-white  text-black"
                : "md:hidden block"
            }
          >
            <label className='ml-4 block'> Usuario </label>
            <input
              className="md:input md:w-11/12 w-full p-1 pl-2 md:ml-3 md:mt-2 md:mb-2 border border-solid border-gray-300 rounded-lg"
              type="text"
              placeholder="Usuario"
            ></input>
            <label className='ml-4 block'> Contraseña </label>
            <input
              className="md:input   md:w-11/12 w-full md:ml-3 md:mt-2 md:mb-2 p-1 mb-2 border border-solid  border-gray-300 rounded-lg"
              type="password"
              placeholder="Contraseña"
            ></input>
            <button
              onClick={handleClickSesion}
              className="md:w-11/12 md:p-1 md:ml-3 md:mt-2 md:mb-2 text-white flex p-1 mt-2  justify-center bg-red-500 rounded-lg w-full"
            >
              Iniciar sesión
            </button>
          </div>
        </div>
        <div className=" w-4 items-center hidden justify-center md:flex cursor-pointer">
          <span className="">
            <FontAwesomeIcon icon={faUser} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sesion;
