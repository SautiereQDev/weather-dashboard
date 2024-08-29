import SearchBar from "./SearchBar.jsx";
import {NavLink} from "react-router-dom";

const NavBar = () => {

	return (
		<div className="bg-blue-800 text-white px-3 py-2 align-middle">
			<ul className="flex justify-between items-center">
				<div>
					<li className="text-4xl font-bold"><a href="/">Météo</a></li>
				</div>
					<SearchBar />
				<li className="flex justify-between text-xl space-x-8">
					<NavLink to="/daily_forecast" className=" hover:font-bold">Part jours</NavLink>
					<NavLink to="/hourly_forecast"  className=" hover:font-bold">Par heures</NavLink>
					<NavLink to="#"  className=" hover:font-bold">A propos</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;