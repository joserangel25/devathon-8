import { useEffect, useMemo } from "react"
import { Map, Marker, useMap, useMarkerRef } from "@vis.gl/react-google-maps"
import { AutocompleteInput } from "./AutocompleteInput"

import { useAddressStore } from "../../store/address"


export const MapComponent = () => {
  const map = useMap()
  const addressStore = useAddressStore((state) => state.address)

  const locationStore = useMemo(() => (
    {
      lat: addressStore?.latitude,
      lng: addressStore?.longitude
    }
  ), [addressStore])
  const [markerRef] = useMarkerRef()


  useEffect(() => {
    if (locationStore.lat) {
      map?.panTo(locationStore);
    }
  }, [locationStore, map])



  return (
    <div className="bg-red w-3/4 h-full grid grid-rows-[50px,1fr] gap-2">
      <AutocompleteInput />
      <Map
        style={{ width: '100%', height: '100%', boxShadow: '1px 1px 30px -15px rgba(0,0,0,0.75)' }}
        defaultCenter={locationStore}
        defaultZoom={15}
        zoomControl
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >
        {
          (locationStore.lat && locationStore.lng) && (
            <Marker
              ref={markerRef}
              position={locationStore} />
          )
        }
      </Map>
    </div>
  )
}
