import { useEffect, useState } from 'react';

/**
 * Represents the state of the geolocation.
 */

interface GeolocationState {
  position: GeolocationPosition | null;
  error: GeolocationPositionError | null;
}

/**
 * Initializes and manages geolocation tracking.
 *
 * @returns {GeolocationState} The current geolocation state, which includes the position and error properties.
 */
const useGeolocation = (): GeolocationState => {
  const [state, setState] = useState<GeolocationState>({
    position: null,
    error: null,
  });

  useEffect(() => {
    const success = (position: GeolocationPosition) => {
      setState({ position, error: null });
    };

    const error = (error: GeolocationPositionError) => {
      setState((prevState) => ({ ...prevState, error }));
      console.log(error.message);
      return null;
    };

    const geoWatchId = navigator.geolocation.watchPosition(success, error, { enableHighAccuracy: true });

    return () => {
      navigator.geolocation.clearWatch(geoWatchId);
    };
  }, []);

  return state;
};

export default useGeolocation;
