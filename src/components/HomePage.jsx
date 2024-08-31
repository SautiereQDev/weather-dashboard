import { useEffect } from 'react';
import useGeolocation from '@/hooks/useGeolocation.tsx';
import { useCityContext } from '@/hooks/useCityContext.jsx';
import NavBar from '@/components/NavBar.jsx';
import useClosestCity from '@/hooks/useClosestCity.tsx';
import DayCard from '@/components/DayCard.jsx';
import { getCurrentDate } from '@/utils/date.ts';

const HomePage = () => {
  const { position } = useGeolocation();
  const { city, setCity } = useCityContext();

  const closestCity = useClosestCity(
    position
      ? {
          latitude: position.coords.latitude ?? null,
          longitude: position.coords.longitude ?? null,
        }
      : { latitude: null, longitude: null },
  );

  useEffect(() => {
    if (closestCity) {
      setCity(closestCity);
    }
  }, [closestCity, setCity]);

  return (
    <>
      <NavBar />
      <h1 className="text-3xl font-bold text-center pt-5 pb-3">{getCurrentDate()}</h1>
      {!city ? <p className="text-md">loading...</p> : <DayCard cityName={city} isCurrent={true} />}
      <div className="flex gap-4 justify-evenly mt-6 mx-4">
        {['Paris', 'Lyon', 'Nantes', 'Tours', 'Strasbourg', 'Bordeaux', 'Marseille'].map((city) => (
          <DayCard key={city} cityName={city} isCurrent={true} />
        ))}
      </div>
      <div className="flex justify-between mt-5 mx-4"></div>
    </>
  );
};

export default HomePage;
