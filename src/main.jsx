import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {CityProvider} from "./contexts/CityContext.jsx";
import {BrowserRouter} from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<ErrorBoundary>
		  <CityProvider>
	        <App />
		  </CityProvider>
		</ErrorBoundary>
	</BrowserRouter>

)