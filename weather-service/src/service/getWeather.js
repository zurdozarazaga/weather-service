const getWeather = async (city, country) => {
  
  const urlData = process.env.REACT_APP_URL_API + `${city},${country}&appid=` + process.env.REACT_APP_API_KEY_OPEN_WEATER_MAP + '&units=metric&lang=es';
  console.log('getWeather', urlData);
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
    return resp; 
  }
  catch (error) {
    console.log('fetch failed', error);
    return error;
  }
};

export default getWeather;