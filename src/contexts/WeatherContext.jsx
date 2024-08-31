import { createContext, useContext, useEffect, useState } from 'react';
import { setParams } from '@/utils/request.ts'; // Importing setParams from its module
import { useCityContext } from '@/contexts/CityContext.jsx';
import PropTypes from 'prop-types'; // Importing useCityContext from its module

const BASE_URI = 'https://api.openweathermap.org/data/2.5/forecast';
const API_KEY = import.meta.env.VITE_API_KEY;

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const { city } = useCityContext();

  const fetchWeather = (cityName) => {
    const params = {
      appid: API_KEY,
      q: cityName,
      units: 'metric',
      lang: 'fr',
    };
    const URI = setParams(BASE_URI, params);
    fetch(URI)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === '404') {
          setWeather(null);
          throw new Error("La ville n'existe pas ou son nom est invalide !");
        } else {
          setWeather(data);
        }
      })
      .catch((error) => {
        throw new Error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (city) {
      fetchWeather(city);
    }
  }, [city]);

  return <WeatherContext.Provider value={{ weather, loading }}>{children}</WeatherContext.Provider>;
};

WeatherProvider.propTypes = {
  children : PropTypes.node.isRequired
}

export const useWeatherContext = () => useContext(WeatherContext);
