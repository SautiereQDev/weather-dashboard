// Permet la recherche d'une ville

export const useSearch = (ville) => {
	fetch(`http://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${ville}&days=10&aqi=no&alerts=no`)
		.then(r => r.json())
		.catch(error => console.error(error))
}

export default useSearch;