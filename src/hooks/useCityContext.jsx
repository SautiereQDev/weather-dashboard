import { useContext } from 'react';
import { CityContext } from '@context/CityContext.jsx';

export const useCityContext = () => {
  return useContext(CityContext);
};
