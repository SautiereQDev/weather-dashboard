import SearchBar from "./ui/SearchBar.jsx";
import ThemeSwitch from "./ThemeSwitch.jsx";

export const NavBar = () => {
    return (
        <div className="flex justify-between bg-gray-700 py-1 px-4 text-white">
            <a href="/" className="flex items-center gap-2 max-w-12 my-auto">
                <img src="/logo.png" alt="Application logo"/>
                <p className="text-xl font-bold">WeatherForecast</p>
            </a>
            <SearchBar className="mx-auto"/>
            {/* TODO : Switcher C° vers F°*/}
            <ThemeSwitch className="ml-4"/>
        </div>
    )
}

export default NavBar;