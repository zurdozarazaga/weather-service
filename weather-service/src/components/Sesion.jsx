import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import AppContextUser from "../context/appContextUser";

const Sesion = () => {
  ////useContext of user
  const [stateUser, dispatchStateUser, initialStateUser] =
    useContext(AppContextUser);
  const [windowActive, setWindowActive] = React.useState(false);
  const [user, setUser] = React.useState(initialStateUser);
  const handleClickSesion = () => {
    setWindowActive(!windowActive);
  };
  // handle of user
  const handleSubmitUser = (e) => {
    e.preventDefault();
    const { user, password } = e.target.elements;
    let dataUser = {};
    dataUser.user = user.value;
    dataUser.password = password.value;
    dispatchStateUser({
      type: "SET_USER",
      payload: dataUser,
    });
  };

  useEffect(() => {
    setUser(stateUser);
  }, [stateUser]);

  return (
    <div className=" md:hover:bg-blue-600  text-lg md:mb-2 md:relative border border-solid md:mt-4 md:mr-8 bg-transparent md:bg-blue-500 border-gray-300 md:rounded ">
      <div className="md:flex md:mr-3 md:items-center ">
        <div className=" bg-transparent md:bg-blue-500 m-3 md:m-1 md:mr-2	border-gray-300 rounded-lg">
          <span
            onClick={handleClickSesion}
            className=" flex justify-center md:hover:bg-blue-600 md:text-white text-gray-400 cursor-pointer"
          >
            {user.state ? user.state.user : "Iniciar Sesión"}
          </span>
          <div
            className={
              windowActive
                ? "block md:mr-88  md:mt-1 md:fixed md:right-8 md:h-44 md:w-80 md:shadow-sm md:z-10 bg-transparent  text-black"
                : "md:hidden block bg-transparent text-gray-400 w-full"
            }
          >
            <form onSubmit={handleSubmitUser}>
              <label className="ml-4 block text-gray-400"> Usuario </label>
              <input
                className="md:input md:w-11/12 w-full p-1 pl-2 md:ml-3 md:mt-2 md:mb-2 text-gray-400 bg-transparent border border-solid border-gray-300 rounded-lg"
                type="text"
                placeholder="Usuario"
                name="user"
              ></input>
              <label className="ml-4 block text-gray-400"> Contraseña </label>
              <input
                className="md:input   md:w-11/12 w-full md:ml-3 md:mt-2 md:mb-2 p-1 mb-2 text-gray-400 bg-transparent border border-solid  border-gray-300 rounded-lg"
                type="password"
                placeholder="Contraseña"
                name="password"
              ></input>
              <button
                onClick={handleClickSesion}
                className="md:w-11/12 md:p-1 md:ml-3 md:mt-2 md:mb-2 text-white flex p-1 mt-2  justify-center bg-blue-500 hover:bg-blue-600 rounded-lg w-full"
              >
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
        <div className=" w-4 items-center hidden justify-center md:flex cursor-pointer">
          <span onClick={handleClickSesion} className="">
            <FontAwesomeIcon icon={faUser} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sesion;
