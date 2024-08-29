import NavBar from "./NavBar.jsx";
import { useCityContext } from "@/contexts/CityContext.jsx";
import { WeatherProvider } from "@/contexts/WeatherContext.jsx";
import { getCurrentDate } from "@/utils/date.ts";
import DayCard from "@/components/DayCard.jsx";

export const DayForecast = () => {
	const { city } = useCityContext();

	return (
		<WeatherProvider>
			<NavBar />
			<h1 className="text-4xl font-bold text-center mt-3">Météo à {city}</h1>
			<h2 className="text-xl text-center">{getCurrentDate()}</h2>
			<div className="flex gap-4 justify-evenly mt-6 mx-4">
				{[...Array(4)].map((_, i) => (
					<DayCard key={i} index={i}/>
				))}
			</div>
			<div className="flex justify-between mt-5 mx-4">
			</div>
		</WeatherProvider>
	);
};

export default DayForecast;