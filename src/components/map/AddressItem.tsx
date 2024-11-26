import { FC } from "react"
import { IAddress } from "../../interface/gps"
import { useAddressStore } from "../../store/address"

interface Props {
  address: IAddress
}
export const AddressItem: FC<Props> = ({ address }) => {
  const setAddress = useAddressStore((state) => state.setAddress)
  return (
    <div className="flex flex-col py-2">
      <dt className="md:text-lg text-white">
        <button
          className="text-start"
          onClick={() => {
            setAddress(address)
          }}
        >
          {address.name}
        </button>
      </dt>
      <dd className="text-md  font-semibold leading-snug">{address.address}</dd>
    </div>
  )
}
