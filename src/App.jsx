import {DayForecast} from "@/components/DayForecast.jsx";
import {Route, Routes} from "react-router-dom";
import {HourForecast} from "@/components/HourForecast.jsx";
import HomePage from "@/components/HomePage.jsx";



const App = () => {
	return (
		// TODO: Rendre cliquable les cards journalière vers la page de hourly_card correspondante au jour de la car clickée
		// TODO: Afficher le nom du pays après avoir recherché une ville pour être sur que ce soit la bonne
		// TODO: N'afficher que les heures restantes de la journée dans les hourly_forecast pour avoir des journées entière sur les pages suivantes
		<Routes>
			<Route path="/" element={<HomePage/>}/>
			<Route path="/daily_forecast" element={<DayForecast/>}/>
			<Route path="/hourly_forecast" element={<HourForecast/>}/>
		</Routes>
	);
}

export default App;