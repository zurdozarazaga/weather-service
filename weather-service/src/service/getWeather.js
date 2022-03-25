const getWeather = async (city, country) => {
  //constant url and data
  const env = process.env.REACT_APP_URL_API;
  console.log(env);
  const urlData = process.env.REACT_APP_URL_API + `${city},${country}&appid=` + process.env.REACT_APP_API_KEY_OPEN_WEATER_MAP + '&units=metric';
  console.log(urlData);
  try{
    const response = await fetch(urlData , {
      method: 'GET',

      headers: {
        // 'Content-Type': 'application/json',
        // 'mode' : 'no-cors'
      },
    });
    const resp = await response.json();
    console.log(resp) 
  }
  catch (error) {
    console.log('fetch failed', error);
  }
};

export default getWeather;