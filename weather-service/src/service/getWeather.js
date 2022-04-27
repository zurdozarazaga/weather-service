// call to API
const getWeather = async (city, country) => {
  const urlData =
    process.env.REACT_APP_URL_API +
    `${city},${country}&appid=` +
    process.env.REACT_APP_API_KEY_OPEN_WEATER_MAP +
    "&units=metric&lang=es";

  try {
    const response = await fetch(urlData, {
      method: "GET",
    });
    const resp = await response.json();
    console.log('antes de la condcion',resp);
    console.log(typeof(resp.cod));
    if (resp.cod !== 200) {
      throw new Error('no se encotró resultado válido. Vuelva a intentarlo');
    }
    console.log('despues de la condcion',resp);
    return resp;
  } catch (error) {
    return (error.message);
  }
};



export default getWeather;
