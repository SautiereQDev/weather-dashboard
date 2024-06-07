import React, {useEffect, useState} from "react";
import Card from "./Card.jsx";
import Carousel from "./Carousel.jsx";

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
        <div className='mt-6'>
            <p className="text-4xl font-bold">Météo {data.location.name}</p>
            <Carousel components={data.forecast.forecastday[0].hour.map((hour, index) => <Card data={hour} type={"hour"} key={index}/>)} nbElements={8}/>
        </div>

    );
};

export default Forecast;
