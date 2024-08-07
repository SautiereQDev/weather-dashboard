import {createContext, useContext, useState} from 'react';

const CityContext = createContext(null);

export const CityProvider = ({ children }) => {
	const [city, setCity] = useState('Paris');

	return (
		<CityContext.Provider value={{ city, setCity }}>
			{children}
		</CityContext.Provider>
	);
};

export const useCityContext = () => {
	return useContext(CityContext);
};