import { LuMoon, LuSun } from 'react-icons/lu';
import { useContext } from 'react';
import { ThemeContext } from '../../App.jsx';

const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <a
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="border rounded-full p-2 my-1 mr-8 text-white cursor-pointer"
    >
      {theme === 'dark' ? <LuMoon size={20} /> : <LuSun size={20} />}
    </a>
  );
};

export default ThemeSwitch;
