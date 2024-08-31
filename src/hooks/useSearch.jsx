import { setParams } from "@/utils/request.ts";
import { useState, useEffect } from "react";

const BASE_URI = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = import.meta.env.VITE_API_KEY;

const useSearch = (city) => {
	const [weather, setWeather] = useState(null);
	const [loading, setLoading] = useState(true)

	const params = {
		appid: API_KEY,
		q: city,
		units: 'metric',
		lang: 'fr',
	};
	const URI = setParams(BASE_URI, params);

	useEffect(() => {
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
				setLoading(false)
			})
			.catch((error) => {
				setLoading(false)
				throw new Error(error.message)
			});
	}, [URI, city]);

	return { cityWeather: weather, cityLoading: loading };
};

export default useSearch;