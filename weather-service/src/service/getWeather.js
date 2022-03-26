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

    return resp;
  } catch (error) {
    return error;
  }
};

export default getWeather;
