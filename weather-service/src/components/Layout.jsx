import React from "react";
import WeatherProvider from "../context/weathercontext";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const Layout = () => {
  return (
    <WeatherProvider>
      <div className=' w-full'>
        <Header />
        <Main />
        <Footer />
      </div>
    </WeatherProvider>
  );
};

export default Layout;
