import { APIProvider } from "@vis.gl/react-google-maps"
import { MapComponent, AddressList } from "../components/map"
import { API_KEY } from "../const/env"

export const Gps = () => {
  return (
    <div className="w-full h-full flex gap-2 pb-12">
      <APIProvider apiKey={API_KEY}>


        <MapComponent />
        <AddressList />
      </APIProvider>
    </div>
  )
}
