import React, {useEffect, useState} from 'react';

interface GeolocationState {
  position: GeolocationPosition | null;
  error: GeolocationPositionError | null;
}

const useGeolocation = () => {
	const [state, setState] = useState<GeolocationState>({
	  position: null,
	  error: null
	})

  useEffect(() => {
	const success = (position: GeolocationPosition) => {
	  setState({ position, error: null });
	}

	const error = (error: GeolocationPositionError) => {
	  setState(prevState => ({...prevState, error}));
	  console.log(error)
	}

	const geoWatchId = navigator.geolocation.getCurrentPosition(
		success,
		error,
		{enableHighAccuracy: true}
	);

	return () => {
	  navigator.geolocation.clearWatch(geoWatchId);
	};
  }, []);

  return state;
};

export default useGeolocation;
