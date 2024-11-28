import { useEffect, useRef, useState } from 'react';
import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import { useAddressStore } from '../../store/address';
import { toast } from 'react-toastify';

export const AutocompleteInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const map = useMap()
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const placesLib = useMapsLibrary('places')

  const setAddress = useAddressStore((state) => state.setAddress)

  useEffect(() => {
    if (inputRef.current && !autocomplete && placesLib) {
      const autocompleteInstance = new placesLib.Autocomplete(inputRef.current!, {
        fields: ['formatted_address', 'geometry', 'name', 'place_id'],
      });

      autocompleteInstance.addListener('place_changed', () => {
        const place = autocompleteInstance.getPlace();
        if (place.geometry && place.geometry.location) {
          const lat = place.geometry.location.lat();
          const lng = place.geometry.location.lng();
          const name = place.name ?? 'No name'
          const address = place.formatted_address ?? 'No address'
          setAddress({ name, address, lat, lng })
          toast.success('🎅 Guardado en la base de datos 🎅', {
            icon: false
          })
          map?.panTo({ lat, lng });
        }
      });

      setAutocomplete(autocompleteInstance);
    }
  }, [autocomplete, placesLib, setAddress, map]);

  const resetInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div className='w-full flex items-center justify-center'>
      <div className="flex w-3/4">
        <input
          type="text"
          ref={inputRef}
          className="outline-none rounded-none rounded-s-md bg-gray-50 border border-primary text-gray-900  block flex-1 min-w-0 w-full text-sm p-2.5"
          placeholder="Buscar ubicacion..." />

        <button
          className="inline-flex items-center px-3 text-sm text-white border border-e-0 border-primary rounded-e-md bg-primary hover:bg-gray-50 hover:text-primary hover:border-gray-50 transition-all"
          onClick={resetInput}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18" height="18" viewBox="0 0 24 24"
            style={{ fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }}
          ><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path></svg>
        </button>
      </div>
    </div>
  );
};
