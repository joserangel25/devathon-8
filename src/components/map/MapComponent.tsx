import { useEffect, useState } from "react"
import { APIProvider, Map, Marker, useMarkerRef } from "@vis.gl/react-google-maps"
import { AutocompleteInput } from "./AutocompleteInput"

import { API_KEY } from "../../const/env"
import { INIT_LOCATION } from "../../const/const"

import type { ILocation } from "../../interface/gps"

export const MapComponent = () => {

  const [location, setLocation] = useState<ILocation>({ lat: 0, lng: 0 })
  const [markerRef] = useMarkerRef()

  const onChangeLocation = (lat: number, lng: number) => {
    setLocation({ lat, lng })
  }

  useEffect(() => {
    setLocation(INIT_LOCATION)
  }, [])


  return (
    <APIProvider apiKey={API_KEY}>
      <div className="bg-red w-3/4 h-full grid grid-rows-[50px,1fr] gap-2">
        <AutocompleteInput
          onChangeLocation={onChangeLocation}
        />
        <Map
          style={{ width: '100%', height: '100%', boxShadow: '1px 1px 32px -24px rgba(0,0,0,0.75)' }}
          defaultCenter={INIT_LOCATION}
          center={location}
          defaultZoom={3}
          minZoom={12}
          zoomControl
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        >
          {
            (location.lat && location.lng) && (
              <Marker ref={markerRef} position={location} />
            )
          }
        </Map>
      </div>
    </APIProvider>
  )
}
