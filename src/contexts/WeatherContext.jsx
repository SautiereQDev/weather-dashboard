import { createContext, useContext, useEffect, useState } from "react";
import { useCityContext } from "./CityContext.jsx";
import { setParams } from "../utils/request.ts";

const WeatherContext = createContext(null);

export const WeatherProvider = ({ children }) => {
	const [weather, setWeather] = useState(null);
	const [loading, setLoading] = useState(true);

	const { city } = useCityContext();

	const baseURI = "https://api.openweathermap.org/data/2.5/forecast";
	const URI = setParams(baseURI, {
		appid: import.meta.env.VITE_API_KEY,
		q: city,
		units: 'metric',
		lang: 'fr'
	});

	useEffect(() => {
		setLoading(true);
		fetch(URI)
			.then(res => res.json())
			.then(data => {
				if (data.cod === "404") {
					setWeather(null);
					throw new Error("La ville n'existe pas ou son nom est invalide !");
				} else {
					setWeather(data);
				}
				setLoading(false);
			})
			.catch(error => {
				setLoading(false);
				throw new Error(error.message);
			});
	}, [city, URI]);

	return (
		<WeatherContext.Provider value={{ weather, loading }}>
			{children}
		</WeatherContext.Provider>
	);
};

export const useWeatherContext = () => {
	return useContext(WeatherContext);
};