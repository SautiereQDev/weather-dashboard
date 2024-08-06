import ForecastCard from "./Components/Card.jsx";
import NavBar from "./Components/NavBar.jsx";
import Card from "./Components/Card.jsx";

const App = () => {
	return (
		<>
			<NavBar/>
			<h1 className="text-4xl font-bold text-center mt-3">Météo</h1> {/*météo à Paris*/}
			<Card/>
		</>
	);
};

export default App;
