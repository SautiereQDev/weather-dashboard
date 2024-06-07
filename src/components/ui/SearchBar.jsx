import { LuSearch } from "react-icons/lu";

const SearchBar = () => {
    return (
        <div className="flex gap-6 px-2 py-1 items-center w-max m-auto border bg-gray-400 text-white rounded-xl relative">
            <input type="text" placeholder="Rechercher une ville..." className="bg-gray-400 placeholder-white pr-4 mx-1 my-0.5"/>
            <LuSearch size={18} className="absolute right-0 mr-2"/>
        </div>
    );
};

export default SearchBar;