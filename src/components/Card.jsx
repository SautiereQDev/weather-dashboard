import { useEffect, useState } from "react";

const ForecastCard = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const baseURI = "http://api.weatherapi.com/v1/forecast.json";
	const queryParams = new URLSearchParams({
		key: import.meta.env.VITE_API_KEY,
		q: 'Paris',
		days: 10,
		aqi: 'no',
		alerts: 'no',
		lang: 'fr'
	});
	const URI = `${baseURI}?${queryParams.toString()}`;

	useEffect(() => {
		console.log("Fetching data from:", URI);
		fetch(URI)
			.then(res => res.json())
			.then(data => {
				setData(data);
				setLoading(false);
			})
			.catch(error => {
				console.error(error);
				setLoading(false);
			});
	}, [URI]);

	if (loading) {
		return <h1 className="text-4xl text-center">Loading...</h1>;
	}

	return (
		<div className="border py-3 mt-3 text-center box-border">

		</div>
	);
};

export default ForecastCard;