import { useState, useEffect } from 'react';

/**
 * The API key used for authentication.
 *
 * @type {string}
 * @readonly
 */
const API_KEY = import.meta.env.VITE_API_KEY;

/**
 * A custom hook for fetching weather data for a specified city.
 *
 * @param {string} city - The name of the city for which to fetch weather data.
 * @param {boolean} [isCurrent=false] - Specifies whether to fetch current weather data or forecast data.
 * @returns {Object} An object containing the fetched weather data, loading state, and error state.
 *                  - `cityWeather`: The fetched weather data.
 *                  - `cityLoading`: A boolean indicating whether the data is still loading.
 *                  - `error`: An error message if an error occurred during the fetch.
 */
const useFetchWeather = (city, isCurrent = false) => {
  const BASE_URI = isCurrent
    ? 'https://api.openweathermap.org/data/2.5/weather'
    : 'https://api.openweathermap.org/data/2.5/forecast';
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) {
      setLoading(false);
      return;
    }

    const params = {
      appid: API_KEY,
      q: city,
      units: 'metric',
      lang: 'fr',
    };
    const URI = `${BASE_URI}?${new URLSearchParams(params).toString()}`;

    setLoading(true);
    fetch(URI)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === '404') {
          throw new Error("La ville n'existe pas ou son nom est invalide !");
        } else if (!data || Object.keys(data).length === 0) {
          throw new Error('Empty fetched data');
        } else {
          setWeather(data);
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [city, BASE_URI]);

  return { cityWeather: weather, cityLoading: loading, error };
};

export default useFetchWeather;
