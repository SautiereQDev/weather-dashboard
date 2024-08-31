import NavBar from "./NavBar.jsx";
import {getCurrentDate} from "@/utils/date.ts";
import DayCard from "@/components/DayCard.jsx";

export const DayForecast = () => {

	// TODO: goélocaliser l'utilisateur et lui proposer la mété vers la ville la plus proche
	return (
		<>
			<NavBar/>
			<h1 className="text-4xl font-bold text-center mt-3">Prévisions météo du {getCurrentDate()}</h1>
			<div className="flex gap-4 justify-evenly mt-6 mx-4">
				{['Paris', 'Lyon', 'Nantes', 'Tours', 'Strasbourg', 'Bordeaux ', 'Marseille' ].map((cityName) => (
					<DayCard key={cityName} index={0} cityName={cityName}/>
				))}
			</div>
			<div className="flex justify-between mt-5 mx-4">
			</div>
		</>
	);
};

export default DayForecast;