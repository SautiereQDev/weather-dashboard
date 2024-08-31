import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CityProvider } from './contexts/CityContext.jsx';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import ErrorBoundary from '@/components/ErrorBoundary.jsx';
// eslint-disable-next-line import/no-unresolved
import { WeatherProvider } from '@/contexts/WeatherContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ErrorBoundary>
      <CityProvider>
        <WeatherProvider>
          <App />
        </WeatherProvider>
      </CityProvider>
    </ErrorBoundary>
  </BrowserRouter>,
);
