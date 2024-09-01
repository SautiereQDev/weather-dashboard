import { useContext } from 'react';
import WeatherContext from '@/contexts/WeatherContext.jsx'

export const useWeatherContext = () => useContext(WeatherContext);