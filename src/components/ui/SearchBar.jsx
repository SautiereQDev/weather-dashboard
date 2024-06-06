import { LuSearch } from "react-icons/lu";

const SearchBar = () => {
    return <div className="flex gap-6 px-2 py-1 border bg-gray-400 text-white rounded-xl">
        <input type="text" placeholder="Rechercher une ville..." className="bg-gray-400 placeholder-white"/>
        <LuSearch/>
    </div>
};

export default SearchBar;
