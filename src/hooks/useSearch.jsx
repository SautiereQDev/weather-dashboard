// src/hooks/useSearch.jsx
import { useState, useEffect } from "react";

const BASE_URI = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = import.meta.env.VITE_API_KEY;

const useSearch = (city) => {
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
				if (data.cod === "404") {
					throw new Error("La ville n'existe pas ou son nom est invalide !");
				} else if (!data || Object.keys(data).length === 0) {
					throw new Error("Empty fetched data");
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
	}, [city]);

	return { cityWeather: weather, cityLoading: loading, error };
};

export default useSearch;