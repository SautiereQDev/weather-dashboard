import NavBar from "./NavBar.jsx";
import {getCurrentDate} from "@/utils/date.ts";
import DayCard from "@/components/DayCard.jsx";
import useGeolocation from "@/hooks/useGeolocalisation.tsx";

export const DayForecast = () => {

	const {position, error} = useGeolocation();

	if(position){
		console.log(position)
	}

	// TODO: goélocaliser l'utilisateur et lui proposer la mété vers la ville la plus proche
	return (
		<>
			<NavBar/>
			<h1 className="text-4xl font-bold text-center mt-3">Prévisions météo du {getCurrentDate()}</h1>
			<div className="flex gap-4 justify-evenly mt-6 mx-4">
				{['Paris', 'Lyon', 'Nantes', 'Tours', 'Strasbourg', 'Bordeaux ', 'Marseille' ].map((cityName) => (
					<DayCard key={cityName} cityName={cityName} isCurrent={true}/>
				))}
			</div>
			<div className="flex justify-between mt-5 mx-4">
			</div>
		</>
	);
};

export default DayForecast;