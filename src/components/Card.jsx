import {dateToHour} from '../utils/date';
import '../utils/WeatherIcons.json';

const Card = ({data, type}) => {
    if(type === "hour"){
        return <div className="bg-gray-200 rounded-md w-max border border-gray-600 text-center">
            <p>{dateToHour(data.time)}</p>
            <img src={data.condition.icon} alt="Weather Condition icon" className="m-auto"/>
            <p>{data.condition.text}</p>
            <p>{data.temp_c}°C</p>
        </div>
    }

    // if(type === "day"){
    //
    // }

};

export default Card;
