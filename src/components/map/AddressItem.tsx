import { FC } from "react"
import { useMap } from "@vis.gl/react-google-maps"
import { IAddress } from "../../interface/gps"
import { useAddressStore } from "../../store/address"

interface Props {
  address: IAddress
}
export const AddressItem: FC<Props> = ({ address }) => {
  const map = useMap()
  const setAddress = useAddressStore((state) => state.setAddress)
  return (
    <div className="flex flex-col py-2">
      <dt className="md:text-lg text-white ">
        <button
          className="text-start text-yellow-400 font-semibold leading-snug"
          onClick={() => {
            setAddress(address)
            map?.panTo({ lat: address.latitude, lng: address.longitude });
          }}
        >
          🔴{address.name}⚪
        </button>
      </dt>
      <dd className="text-sm text-white font-medium leading-snug">{address.address}</dd>
    </div>
  )
}
