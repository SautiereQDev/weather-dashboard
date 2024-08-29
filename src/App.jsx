import {DayForecast} from "@/components/DayForecast.jsx";
import {Route, Routes} from "react-router-dom";
import {HourForecast} from "@/components/HourForecast.jsx";

const App = () => {
	return (
		// TODO: Faire une home page avec des cards contenant les infos météo en temps réel des plus grandes villes de France
		// TODO: Rendre cliquable les cards journalière vers la page de hourly_card correspondante au jour de la car clickée
		// TODO: Afficher le nom du pays après avoir recherché une ville pour être sur que ce soit la bonne
		<Routes>
			<Route path="/" element={<DayForecast/>}/>
			<Route path="/daily_forecast" element={<DayForecast/>}/>
			<Route path="/hourly_forecast" element={<HourForecast/>}/>
		</Routes>
	);
}

export default App;