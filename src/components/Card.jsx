import {dateToHour} from '../utils/date';

const Card = ({data, type}) => {
    if(type === "hour"){
        return <div className="bg-gray-200 rounded-md border border-gray-600 text-center">
            <p>{dateToHour(data.time)}</p>
            <img src={data.condition.icon} alt="Weather Condition icon" className="m-auto" width={82}/>
            <p className="italic text-gray-800">{data.condition.text}</p>
            <p className="text-2xl my-1 font-bold">{data.temp_c}°C</p>
        </div>
    }
    if (type === "day") {
        return <div className="bg-gray-200 rounded-md border border-gray-600 text-center">
            <p>{data.date}</p>
            <img src={data.day.condition.icon} alt="Weather Condition icon" className="m-auto" width={82}/>
            <p className="italic text-gray-800">{data.day.condition.text}</p>
            <p className="text-2xl my-1 font-bold">{data.day.avgtemp_c}°C</p>
        </div>
    } else {
        console.error('invalid type, should receive "day" or "hour')
        return null;
    }

};

export default Card;
