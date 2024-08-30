import {setParams} from "@/utils/request.ts";

/**
 * The base URI for making requests to the OpenWeatherMap API.
 *
 * This variable stores the base URI ("https://api.openweathermap.org/data/2.5/forecast")
 * that should be used when making requests to the OpenWeatherMap API.
 *
 * Example Usage:
 *     const uri = BASE_URI + "?q=London&appid=YOUR_API_KEY"
 *
 * @type {string}
 * @readonly
 */
const BASE_URI = "https://api.openweathermap.org/data/2.5/forecast";
/**
 * The API key for accessing a specific service.
 *
 * @type {string}
 * @constant
 * @memberOf external:import.meta.env
 */
const API_KEY = import.meta.env.VITE_API_KEY;


/**
 * Use the useSearch function to search for weather information for a specific city.
 *
 * @param {string} city - The name of the city to search for.
 * @returns {null} Always returns null.
 * @throws {Error} Throws an error if the city does not exist or if the name is invalid.
 */
const useSearch = (city) => {

	const params = {
		appid: API_KEY,
		q: city,
		units: 'metric',
		lang: 'fr',
	};
	const URI = setParams(BASE_URI, params);

	fetch(URI)
		.then((res) => res.json())
		.then((data) => {
			if (data.cod === "404") {
				throw new Error("La ville n'existe pas ou son nom est invalide !");
			} else {
				return data;
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});

	return null;
};

export default useSearch;