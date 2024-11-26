import { APIProvider, Map, Marker, useMarkerRef } from "@vis.gl/react-google-maps"
import { AutocompleteInput } from "./AutocompleteInput"

import { useAddressStore } from "../../store/address"
import { API_KEY } from "../../const/env"


export const MapComponent = () => {

  const addressStore = useAddressStore((state) => state.address)
  const locationStore = {
    lat: addressStore.lat,
    lng: addressStore.lng
  }
  const [markerRef] = useMarkerRef()

  return (
    <APIProvider apiKey={API_KEY}>
      <div className="bg-red w-3/4 h-full grid grid-rows-[50px,1fr] gap-2">
        <AutocompleteInput />
        <Map
          style={{ width: '100%', height: '100%', boxShadow: '1px 1px 32px -24px rgba(0,0,0,0.75)' }}
          defaultCenter={locationStore}
          defaultZoom={15}
          zoomControl
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        >
          {
            (locationStore.lat && locationStore.lng) && (
              <Marker ref={markerRef} position={locationStore} />
            )
          }
        </Map>
      </div>
    </APIProvider>
  )
}
