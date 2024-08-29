import {useWeatherContext} from "@/contexts/WeatherContext.jsx";
import {convertDateToDay} from "@/utils/date.ts";

const DayCard = ({index}) => {
	const {weather, loading} = useWeatherContext()

	if (loading) {
		return <h1 className="text-2xl text-center text-gray-500">Loading...</h1>;
	}

	if (!weather >= weather.list.length) {
		return <h1 className="text-2xl text-center text-red-700">No data available</h1>;
	}

	return (
		<div className="border py-3 mt-3 text-center m-auto w-full">
			<h1 className="text-2xl font-bold">{convertDateToDay(weather.list[4+index*9].dt_txt)}</h1>
			<h2 className="text-xl">{weather.list[4 + index * 9].weather[0].main}</h2>
			<div className="flex justify-center gap-4">
				<img src={`https://openweathermap.org/img/wn/${weather.list[4 + index * 9].weather[0].icon}@2x.png`} alt="weather icon"/>
				<p className="text-2xl my-auto font-bold">{weather.list[4 + index * 9].main.temp}°C</p>
			</div>


		</div>
	);
};

export default DayCard;