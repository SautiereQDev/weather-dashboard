import { useContext } from 'react';
import { CityContext } from '@/contexts/CityContext.jsx';

export const useCityContext = () => {
  return useContext(CityContext);
};
