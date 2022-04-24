// state initial of openweathermap
const initialStateWeather = {
  state: {
    weather: [{}],
    main: {
      temp: "sin datos",
    },
    wind: {},
    dt: 0,
    sys: {
      country: "sin datos",
    },
    id: 0,
    name: "sin datos",
  },
  'loading': false,
};
// reducer for weather
const WeatherReducer = (state = initialStateWeather, action) => {
  switch (action.type) {
    case "SET_WEATHER":
      return {
        ...state,
        state: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        'loading': action.payload,
      };
    default:
      return state;
  }
};

export { initialStateWeather, WeatherReducer };
