import { FC } from "react"

interface Props {
  address: {
    name: string
    address: string,
    lat: number,
    lng: number
  }
}
export const AddressItem: FC<Props> = ({ address }) => {
  return (
    <div className="flex flex-col py-2">
      <dt className="md:text-lg text-white">{address.name}</dt>
      <dd className="text-md  font-semibold leading-snug">{address.address}</dd>
    </div>
  )
}
