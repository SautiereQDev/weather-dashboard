import {createContext, useState} from "react";
import {NavBar} from "./components/NavBar.jsx";

export const ThemeContext = createContext(null)

export const App = () => {
    const [theme, setTheme] = useState('light')
    return (
        <>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <NavBar/>
                <h1 className="text-2xl">HomePage</h1>
            </ThemeContext.Provider>
        </>
    )
}

export default App;