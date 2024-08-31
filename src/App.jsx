import { DayForecast } from '@/components/DayForecast.jsx';
import { Route, Routes } from 'react-router-dom';
import { HourForecast } from '@/components/HourForecast.jsx';
import HomePage from '@/components/HomePage.jsx';

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/daily_forecast" element={<DayForecast />} />
      <Route path="/hourly_forecast" element={<HourForecast />} />
    </Routes>
  );
};

export default App;
