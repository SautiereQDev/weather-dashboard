import React from 'react';
import SearchBar from "./SearchBar.jsx";

const NavBar = () => {
	return (
		<div className="bg-blue-800 text-white px-3 py-2 align-middle">
			<ul className="flex justify-between">
				<div>
					<li className="text-4xl font-bold"><a href="/">Météo</a></li>
				</div>
				<SearchBar />
				<li className="flex justify-between text-xl space-x-4">
					<a href="#">Previsions</a>
					<a href="#">A propos</a>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;