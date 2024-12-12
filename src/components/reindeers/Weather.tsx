import { useState, useEffect } from 'react';

interface WeatherData {
  temperature: number;
  description: string;
  icon: string;
}

export const WeatherComponent = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    // Simulando una llamada a una API
    const fetchWeather = () => {
      setTimeout(() => {
        setWeather({
          temperature: 24,
          description: 'Soleado',
          icon: 'https://example.com/sunny-icon.png', // Reemplaza con una URL de imagen válida
        });
      }, 1000);
    };

    fetchWeather();
  }, []);

  if (!weather) {
    return <div className="weather">Cargando...</div>;
  }

  return (
    <div className="relative flex bg-clip-border rounded-xl bg-slate-100 text-gray-700 shadow-md w-full  flex-row max-h-20">
      <div className="relative w-1/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
        <img
          src="./images/north.png"
          alt="card-image" className="object-cover w-full h-full" />
      </div>
      <div className="px-4 py-2">
        <h6
          className="block  font-sans  antialiased font-semibold leading-relaxed tracking-normal  uppercase text-2xl text-blue-500">
          42°C
        </h6>

        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          Like so many organizations these days, Autodesk is a company in transition.
        </p>

      </div>
    </div>
  );
};

