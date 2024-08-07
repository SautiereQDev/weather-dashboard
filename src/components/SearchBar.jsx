import {TbSearch} from "react-icons/tb";
import {useState} from "react";
import {useCityContext} from "../contexts/CityContext.jsx";

const SearchBar = () => {

	const {setCity} = useCityContext();
	const [inputValue, setInputValue] = useState('');

	function handleClick(ev) {
		ev.preventDefault()
		setCity(inputValue)
		console.log("City updated to:", inputValue)
	}

	return (
			<form className="flex space-x-2">
				<input type="text"
				       className="border  rounded-lg px-2 bg-white text-gray-700 flex flex-center"
				       placeholder="Entrez une ville..."
				       onChange={(ev) => setInputValue(ev.target.value)}
				/>
				<button className="p-2 bg-green-600 rounded-full text-white" onClick={handleClick}><TbSearch/></button>
			</form>
	);
};

export default SearchBar;