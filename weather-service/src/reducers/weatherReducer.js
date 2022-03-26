// state initial of openweathermap
const initialStateWeather = {
  state: {
    weather: [{}],
    main: {
      temp: 'sin datos',
    },
    wind: {},
    dt: 0,
    sys: {
      country: 'sin datos',
    },
    id: 0,
    name: 'sin datos',
  },
};


console.log('initialStateWeather', initialStateWeather);


const WeatherReducer = (state = initialStateWeather, action) => {
  console.log('WeatherReducer', state, action);
  switch (action.type) {
    case 'SET_WEATHER':
      return {
        ...state,
        state: action.payload,
      };
    default:
      return state;
  }
};

export {initialStateWeather, WeatherReducer};