import NavBar from "./components/NavBar.jsx";
import Card from "./components/Card.jsx";
import { useCityContext } from "./contexts/CityContext.jsx";
import {WeatherProvider} from "./contexts/WeatherContext.jsx";
import {useState} from "react";

const App = () => {
	const { city } = useCityContext();
	const [day, setDay] = useState(0)

	return (
		<WeatherProvider>
			<NavBar />
			<h1 className="text-4xl font-bold text-center mt-3">Météo à {city}</h1>
			<div className="flex gap-4 justify-evenly mt-6 mx-4">
				{[...Array(9)].map((_, i) => (
					<Card key={i} index={i} day={day} />
				))}
			</div>
			<div className="flex justify-between mt-5 mx-4">
				<button className={day > 0 ? "p-2 bg-blue-700 text-white rounded-lg border" : "p-2 invisible"} onClick={()=>setDay(day-1)}>Jour précedent</button>
				<button className={day < 4 ? "p-2 bg-blue-700 text-white rounded-lg border" : "p-2 invisible"} onClick={()=>setDay(day+1)}>Jour suivant</button>
			</div>

		</WeatherProvider>
		// 	TODO: Afficher le jour en haut de l'écran
	);
};

export default App;