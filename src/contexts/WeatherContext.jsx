import {createContext, useContext, useEffect, useState} from "react";
import {useCityContext} from "./CityContext.jsx";
import {setParams} from "../utils/request.ts";

const WeatherContext = createContext(null);

export const WeatherProvider = ({ children }) => {
	const {city} = useCityContext();
	const [weather, setWeather] = useState(null);
	const [loading, setLoading] = useState(true);
	const baseURI = "https://api.openweathermap.org/data/2.5/forecast";
	const URI = setParams(baseURI, {
		appid: import.meta.env.VITE_API_KEY,
		q: city,
		units: 'metric',
		lang: 'fr'
	});

	useEffect(() => {
		fetch(URI)
			.then(res => res.json())
			.then(data => {
				setWeather(data);
				setLoading(false);
			})
			.catch(error => {
				console.error(error);
				setLoading(false);
			});
	}, [city, URI]);

	return (
		<WeatherContext.Provider value={{ weather, loading }}>
			{children}
		</WeatherContext.Provider>
	);
}

export const useWeatherContext = () => {
	return useContext(WeatherContext);
};