export const getLocation = (): Promise<GeolocationPosition | null> => {
  sessionStorage.setItem('located', 'true');

  return new Promise((resolve, reject) => {
    const success = (position: GeolocationPosition) => {
      resolve(position);
    };

    const error = (error: GeolocationPositionError) => {
      console.log(error.message);
      reject(new Error(error.message));
    };

    navigator.geolocation.getCurrentPosition(success, error, { enableHighAccuracy: true });
  });
};

export default getLocation;
