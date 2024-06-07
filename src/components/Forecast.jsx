import React, {useEffect, useState} from "react";
import Card from "./Card.jsx";

const Forecast = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        const abortController = new AbortController();

        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=Paris&days=10&aqi=no&alerts=no&lang=fr`)
            .then(r => r.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
            .finally(()=> setLoading(false))
        return ()=> {
            abortController.abort();
        }
    })
    if(loading){
        return <p>Loading...</p>
    }
    return (
        <div className='flex gap-2'>
            {/*crée une card pour chaques heures de la journée suivante*/}
            {data.forecast.forecastday[0].hour.map(hour => <Card data={hour} type={"hour"} key={hour.time}/>)}
        </div>
    );
};

export default Forecast;
