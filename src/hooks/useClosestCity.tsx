import { useEffect, useState } from 'react';
import getLocation from '@/utils/geolocate';
import { useCityContext } from '@/hooks/useCityContext.jsx';

const VITE_API_KEY = import.meta.env.VITE_API_KEY;

const useClosestCity = (): void => {
  const { setCity } = useCityContext();
  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  const [coords, setCoords] = useState<{ latitude: number; longitude: number } | null>(null);

  const fetchLocation = async () => {
    try {
      const loc = await getLocation();
      setPosition(loc);
      sessionStorage.setItem('located', 'true');
    } catch (e: unknown) {
      console.log('Error fetching location:', (e as Error).message);
    }
  };

  useEffect(() => {
    if (!sessionStorage.getItem('located')) {
      fetchLocation().catch((error) => {
        console.log('Error in fetchLocation:', error.message);
      });
    }
  }, []);

  useEffect(() => {
    if (position) {
      const { latitude, longitude } = position.coords;
      setCoords({ latitude, longitude });
    }
  }, [position]);

  useEffect(() => {
    if (coords) {
      const { latitude, longitude } = coords;
      const URI = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${VITE_API_KEY}`;

      fetch(URI)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            setCity(data[0].name);
            sessionStorage.setItem('city', data[0].name);
          }
        })
        .catch((error) => {
          console.error('Error fetching city:', error);
        });
    }
  }, [coords, setCity]);
};

export default useClosestCity;