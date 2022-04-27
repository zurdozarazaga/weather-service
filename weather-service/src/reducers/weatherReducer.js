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
  'error': '',
  stateDate: {
    name: "sin datos",
    country: "sin datos",
    day: "sin datos",
    description: "sin datos",
    temp: "sin datos",
    fahrenheit: "sin datos",
    image: "sin datos",
    precip: "sin datos",
    humidity: "sin datos",
    wind: "sin datos",
    loading: false,
    error: '',
  },
};
// reducer for weather
const WeatherReducer = (state = initialStateWeather, action) => {
  console.log("WeatherReducer: action", action.payload);
  console.log("WeatherReducer: action.type", action.type);
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
      case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { initialStateWeather, WeatherReducer };
