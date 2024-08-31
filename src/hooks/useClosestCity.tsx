// src/hooks/useClosestCity.tsx
import { useEffect, useState } from 'react';

const VITE_API_KEY = import.meta.env.VITE_API_KEY;

const useClosestCity = ({ latitude, longitude }: { latitude: number; longitude: number }) => {
  const [city, setCity] = useState(null);

  useEffect(() => {
    if (latitude && longitude) {
      const URI = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${VITE_API_KEY}`;

      fetch(URI)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            setCity(data[0].name);
          } else {
            setCity(null);
          }
        })
        .catch((error) => {
          console.error('Error fetching city:', error);
          setCity(null);
        });
    }
  }, [latitude, longitude]);

  return city;
};

export default useClosestCity;
