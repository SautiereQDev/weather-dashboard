import NavBar from "@/components/NavBar.jsx";
import HourCard from "@/components/HourCard.jsx";
import { useCityContext } from "@/contexts/CityContext.jsx";
import { useWeatherContext } from "@/contexts/WeatherContext.jsx";
import { useEffect, useState } from "react";
import { getCurrentDate, getUpdatedDate } from "@/utils/date.ts";
import ErrorBoundary from "@/components/ErrorBoundary.jsx";

export const HourForecast = () => {
	const { city } = useCityContext();
	const { loading, weather } = useWeatherContext();

	const [day, setDay] = useState(0);
	const [date, setDate] = useState(getCurrentDate());

	useEffect(() => {
		setDate(getUpdatedDate(day));
	}, [day]);

	if (loading) {
		return <h1 className="text-2xl text-center text-gray-500">Loading...</h1>;
	}

	return (
		<ErrorBoundary>
			<NavBar />
			<h1 className="text-4xl font-bold text-center mt-3">Météo à {city}</h1>
			<h2 className="text-xl text-center">{date}</h2>
			<div className="flex gap-4 justify-evenly mt-6 mx-4">
				{weather && weather.list.length > 0 ? (
					[...Array(9)].map((_, i) => (
						<HourCard key={i} index={i} day={day} />
					))
				) : (
					<h1 className="text-2xl text-center text-red-700">No data available</h1>
				)}
			</div>
			<div className="flex justify-between mt-5 mx-4">
				<button className={day > 0 ? "p-2 bg-blue-700 text-white rounded-lg border" : "p-2 invisible"} onClick={() => setDay(day - 1)}>Jour précedent</button>
				<button className={day < 3 ? "p-2 bg-blue-700 text-white rounded-lg border" : "p-2 invisible"} onClick={() => setDay(day + 1)}>Jour suivant</button>
			</div>
		</ErrorBoundary>
	);
};

export default HourForecast;