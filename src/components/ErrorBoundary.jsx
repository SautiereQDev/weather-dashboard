import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const ErrorBoundary = ({children}) => {
	const [hasError, setHasError] = useState(false);
	const [error, setError] = useState(null);

	const navigate = useNavigate();

	useEffect(() => {
		const handleError = (event) => {
			setHasError(true);
			setError(event.error);
		};

		const handlePromiseRejection = (event) => {
			setHasError(true);
			setError(event.reason);
		}

		window.addEventListener('error', handleError)
		window.addEventListener('unhandledrejection', handlePromiseRejection)
		return () => {
			window.removeEventListener('error', handleError);
			window.removeEventListener('unhandledrejection', handlePromiseRejection);
		}
	}, []);

	const handleGoBack = () => {
		setHasError(false)
		setError(null)
		navigate(-1)
	}

	if(hasError){
		return (
			<div className="bg-red-300 p-2">
				<h1 className="text-lg font-bold text-center">Une erreur est survenue</h1>
				<p className="text-md text-center">{error ? error.toString() : "Une erreur inconnue à eu lieu."}</p>
				<button onClick={handleGoBack}>Revenir en arrière</button>
			</div>
		)
	}

	return children;

};

export default ErrorBoundary;
