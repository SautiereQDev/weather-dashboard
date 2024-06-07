import {createContext, useState} from "react";
import {NavBar} from "./components/NavBar.jsx";
import Forecast from "./components/Forecast.jsx";

export const ThemeContext = createContext(null)

export const App = () => {
    const [theme, setTheme] = useState('light')
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <NavBar/>
            <Forecast />
        </ThemeContext.Provider>
    )
}

export default App;