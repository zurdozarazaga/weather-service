import React from "react";

import Sesion from "./Sesion";

const Header = () => {
  return (
    <div className="block md:flex h-full justify-center md:justify-between text-white  items-center bg-blue-400 ">
      <div className=" flex text-2xl justify-center items-center ml-8 mb-2 ">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-347820.appspot.com/o/logo%2F737931.svg?alt=media&token=d9411429-7d5b-400d-bc90-d863794adeb5"
          alt="Logo"
          className=" flex justify-center h-14 w-14 rounded-md mt-2"
        ></img>
      </div>
      <Sesion />
    </div>
  );
};

export default Header;
