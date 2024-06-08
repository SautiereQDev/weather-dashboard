import React, {useEffect, useState} from "react";
import Card from "./Card.jsx";
import Carousel from "./Carousel.jsx";
import {LuArrowDown, LuArrowUp, LuSun} from "react-icons/lu";

const ForecastDay = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		const abortController = new AbortController();

		fetch(`https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=Paris&days=10&aqi=no&alerts=no&lang=fr`)
			.then(r => r.json())
			.then(data => setData(data))
			.catch(error => console.error(error))
			.finally(() => setLoading(false))
		return () => {
			abortController.abort();
		}
	})
	if (loading) {
		return <p>Loading...</p>
	}
	// TODO : Avoir une recherche de ville fonctionnelle
	// TODO : Permettre de choisir entre une vue heure par heure ou jours par jours
	return (
		<div className='mt-6'>
			<header className="ml-4 mb-6">
				<h2 className="underline"><span
					className="font-bold">{data.location.region}</span> - {data.location.country}</h2>
				<h1 className="text-4xl font-bold">Météo {data.location.name}</h1>
			</header>
			<main>
				<div className="flex justify-between">
					<p className="text-xl ml-4">Aujourd'hui</p>
					<p className="flex items-center gap-2 mr-4">
						<LuSun size={26} className="mr-1"/>
						{/*Lever de soleil*/}
						<span className="flex items-center">
                            <LuArrowUp size={18}/>
                            <span
	                            className="font-bold mr-0.5">{data.forecast.forecastday[0].astro.sunrise.split(' ')[0]}
                            </span>{data.forecast.forecastday[0].astro.sunrise.split(' ')[1]}
                        </span>
						{/*Coucher de soleil*/}
						<span className="flex items-center">
                            <LuArrowDown size={18}/>
                            <span
	                            className="font-bold mr-0.5">{data.forecast.forecastday[0].astro.sunset.split(' ')[0]}</span>
							{data.forecast.forecastday[0].astro.sunset.split(' ')[1]}
                        </span>
					</p>
				</div>
				<hr className="mb-4 mt-1 border-gray-400"/>
				{/* TODO : ne pas afficher les cards de previsions des heures déjà écoulés*/}
				<Carousel
					components={data.forecast.forecastday.map((day) => <Card data={day} type={"day"}
					                                                         key={day.date}/>)}
					nbElements={8}/>
			</main>

		</div>

	);
};

export default ForecastDay;
