import SearchBar from "./ui/SearchBar.jsx";
import ThemeSwitch from "./ThemeSwitch.jsx";

export const NavBar = () => {
    return (
        <div className="flex align-center bg-gray-700 py-1">
            <SearchBar/>
            <ThemeSwitch/>
        </div>
    )
}
