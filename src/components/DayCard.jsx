// src/components/DayCard.jsx
import { useWeatherContext } from "@/contexts/WeatherContext.jsx";
import { convertToHourFormat, convertDateToDay } from "@/utils/date.ts";
import useSearch from "@/hooks/useFetchWeather.jsx";
import PropTypes from "prop-types";

const DayCard = ({ index = 0, cityName, isCurrent = false }) => {
	const { weather, loading } = useWeatherContext();
	const { cityWeather, cityLoading } = useSearch(cityName, isCurrent);



	if (loading || cityLoading) {
		return <h1 className="text-2xl text-center text-gray-500">Loading...</h1>;
	}

	let i = 0;
	let hour = 0;

	const data = cityWeather ?? weather;
	let weatherData;

	if(cityName && isCurrent) {
		weatherData = cityWeather;
	}
	else {
		weatherData = data.list[index * 9 + i - 1]
	}

	while (hour <= 12 && i < weatherData.length / 9) {
		hour = parseInt(convertToHourFormat(weatherData.dt_txt).split('h')[0], 10);
		if (hour > 21) {
			break;
		}
		i++;
	}

	if (!weatherData) {
		return <h1 className="text-2xl text-center text-red-700">No valid data found</h1>;
	}

	return (
		<div className="border py-3 mt-3 text-center m-auto w-full">
			{cityName && (
				<p className="text-2xl font-bold">
					{cityName}
				</p>
			)}
			{!cityName && (
				<h1 className="text-2xl font-bold">{convertDateToDay(weatherData.dt_txt)}</h1>
			)}
			<h2 className="text-xl">{weatherData.weather[0].main}</h2>
			<div className="flex justify-center gap-4">
				<img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather icon" />
				<p className="text-2xl my-auto font-bold">{weatherData.main.temp}°C</p>
			</div>
		</div>
	);
};

DayCard.propTypes = {
	index: PropTypes.number,
	cityName: PropTypes.string,
	isCurrent: PropTypes.bool
};

export default DayCard;