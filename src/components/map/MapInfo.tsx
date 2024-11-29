import { InfoWindow } from "@vis.gl/react-google-maps"
import { useAddressStore } from "../../store/address"


export const MapInfo = () => {
  const addressStore = useAddressStore((state) => state.address)
  const locationStore = {
    lat: addressStore.lat,
    lng: addressStore.lng
  }
  return (
    <InfoWindow
      position={locationStore}
      headerContent={<Header name={addressStore?.name ?? 'No name'} />}
    >
      <button className=" bg-red-400 rounded-md px-4 py-2 font-bold text-white hover:bg-red-800 transition-all">
        Guardar ubicación
      </button>
    </InfoWindow>
  )
}

interface Props {
  name: string
}

const Header: React.FC<Props> = ({ name }) => {
  return (
    <p className="text-lg font-bold">{name}</p>
  )
}