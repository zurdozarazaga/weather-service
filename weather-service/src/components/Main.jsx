import React from "react";
import Report from "./Report";
import TitleMain from "./TitleMain";
import Zone from "./Zone";

const Main = () => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 ml-6 mr-6 mb-2 bg-transparent h-auto ">
      <TitleMain />
      <Zone />
      <Report />
    </div>
  );
};

export default Main;
