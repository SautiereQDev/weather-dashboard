import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const CityContext = createContext(null);

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState('Paris');

  return <CityContext.Provider value={{ city, setCity }}>{children}</CityContext.Provider>;
};

CityProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CityContext;