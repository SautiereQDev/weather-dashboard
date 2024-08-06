const SearchBar = () => {
	return (
		<form>
			<input type="text"
			       className="border  rounded-lg px-2 bg-white text-gray-700 flex flex-center"
			       placeholder="Entrez une ville..."
			/>
		</form>
	);
};

export default SearchBar;