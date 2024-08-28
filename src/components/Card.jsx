import {useWeatherContext} from "@/contexts/WeatherContext.jsx";
import {convertToHourFormat} from "@/utils/date.ts";

const Card = ({day, index}) => {
	const {weather, loading} = useWeatherContext()

	if (loading) {
		return <h1 className="text-2xl text-center text-gray-500">Loading...</h1>;
	}

	if (!weather >= weather.list.length) {
		return <h1 className="text-2xl text-center text-red-700">No data available</h1>;
	}

	return (
		<div className="border py-3 mt-3 text-center m-auto w-full">
			<h1 className="text-xl font-bold">{convertToHourFormat(weather.list[index+(day*9)-day].dt_txt)}</h1>
			<h2 className="text-lg font-bold mt-4">{weather.list[index+(day*9)-day].weather[0].main}</h2>
			<div className="flex justify-center">
				<img src={`https://openweathermap.org/img/wn/${weather.list[index+(day*9)-day].weather[0].icon}@2x.png`} alt="weather icon"/>
				<p className="text-lg my-auto">{weather.list[index+(day*9)-day].main.temp}°C</p>
			</div>
		</div>
	);
};

export default Card;