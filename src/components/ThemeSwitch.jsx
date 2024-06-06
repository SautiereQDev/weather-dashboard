import { LuMoon, LuSun  } from "react-icons/lu";
import {useContext} from "react";
import {ThemeContext} from "../App.jsx";

const ThemeSwitch = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    return <a onClick={()=> setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? <LuMoon/> : <LuSun/>}</a>
};

export default ThemeSwitch;
