import React from "react";

const Report = () => {
  return <div className="grid gap-4 grid-cols-1 md:grid-cols-2 bg-white pl-4 pr-4">
    <div className=' md:col-span-2 flex justify-center items-center h-8 border-b-2 border-black'>Reporte del Tiempo</div>
    <div className='col-span-1 block'>
      <div>
        <h3 className='text-gray-400'> Argentina</h3>
      </div>
      <div>
        <h1 className='text-gray-400 text-2xl mt-2'>Rio Cuarto</h1>
      </div>
      <div className='text-gray-900 text-3xl mt-2'>
        VIERNES
      </div>
      <div className='text-gray-900 text-2xl mt-2'>
        soleado
      </div>
      <div className='text-gray-900 text-5xl mt-2'>
        22 °C
      </div>
      <div className='text-gray-900 text-xl mt-2'>
        71.6 ° F
      </div>
    </div>
    <div className='col-span-1 block'>
      <div>
        <img src="http://openweathermap.org/img/wn/02n@2x.png" alt="icon clima"></img>
      </div>
      <div className='text-gray-900 text-base mt-2'>
        prob de precipitaciones: 0%
      </div>
      <div className='text-gray-900 text-base mt-2'>
        Humedad: 54%
      </div>
      <div className='text-gray-900 text-base mt-2'>
        viento a : 5 km/h
      </div>
    </div>
  </div>;
};

export default Report;
