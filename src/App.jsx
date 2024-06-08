import {createContext, useState} from "react";
import {NavBar} from "./components/NavBar.jsx";
import useSearch from "./hooks/useSearch.jsx";
import ForecastDay from "./components/ForecastDay.jsx";

export const ThemeContext = createContext(null)

export const App = () => {

    const [ville, setVille] = useState('');

    function handleSubmit(ev) {
        ev.preventDefault()
        useSearch(ville)
    }

    const [theme, setTheme] = useState('light')
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <NavBar/>
            <main className="text-center mt-4">
                <h1 className="text-3xl font-bold">Entrez le nom d'une ville</h1>
                <form onSubmit={handleSubmit} className="flex justify-center align-center gap-3.5 mt-3">
                    <input type="text" placeholder="Ville" onChange={(ev) => setVille(ev.target.value)}
                           className="border rounded-lg px-1 "/>
                    <button type="submit"
                            className="border bg-sky-500 text-white rounded-lg p-1 align-center h-8">Valider
                    </button>
                </form>
            </main>
            <ForecastDay data={useSearch(ville)} day={0}/>
        </ThemeContext.Provider>
    )
}

export default App;