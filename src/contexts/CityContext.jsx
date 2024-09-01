import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const CityContext = createContext(null);

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState(() => {
    return sessionStorage.getItem('city') || 'Paris';
  });

  useEffect(() => {
    if (city) {
      sessionStorage.setItem('city', city);
    }
  }, [city]);

  return <CityContext.Provider value={{ city, setCity }}>{children}</CityContext.Provider>;
};

CityProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CityContext;
