import NavBar from "./components/NavBar.jsx";
import Card from "./components/Card.jsx";
import { useCityContext } from "./contexts/CityContext.jsx";

const App = () => {
	const { city } = useCityContext();

	return (
		<>
			<NavBar />
			<h1 className="text-4xl font-bold text-center mt-3">Météo à {city}</h1>
			{/* <Card /> */}
		</>
	);
};

export default App;