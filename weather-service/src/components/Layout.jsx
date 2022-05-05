import React from "react";
import WeatherProvider from "../context/weathercontext";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { Helmet } from "react-helmet";

const Layout = () => {
  return (
    //API call context provider 
    <WeatherProvider>
      <div className=" w-full bg-hero-bg">
        <Header />
        <Main />
        <Footer />
      </div>
    </WeatherProvider>
  );
};

export default Layout;
