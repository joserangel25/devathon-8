import { useState, useEffect } from 'react';
import { getWeatherApi } from '../../utils/api';
import { IWeather } from '../../interface/reindeer';


export const WeatherComponent = () => {
  const [weather, setWeather] = useState<IWeather | null>(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getWeather = async () => {
      const weather = await getWeatherApi()
      if (!weather.error) {
        setWeather(weather.weather)
      }
      setIsLoading(false)
    };

    getWeather();
  }, []);


  return (
    <div className='px-2 py-3 bg-blue-200 rounded-md text-gray-800 shadow-md w-full text-center mb-3'>
      {
        isLoading ? (
          <p>Cargando..</p>
        ) : (
          <p>
            Temperatura:
            <span className='font-bold text-primary'> {weather?.temperature}</span> en el Polo Norte 🥶
          </p>
        )
      }
    </div>
  );
};

