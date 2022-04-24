import React from "react";

import Sesion from "./Sesion";

const Header = () => {
  return (
    <div className="block md:flex h-full justify-center md:justify-between text-white  items-center bg-red-500 ">
      <div className="text-2xl justify-center items-center ml-8 mb-2 ">
        <h1 className=" flex justify-center  ">Weather Service</h1>
      </div>
      <Sesion />
    </div>
  );
};

export default Header;
