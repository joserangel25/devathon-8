import { AddressItem } from "./AddressItem"
import { ADDRESS_LIST } from "../../const/address"

export const AddressList = () => {
  return (
    <dl className="max-w-md text-gray-900 divide-y divide-gray-200 bg-primary px-2 rounded-md">
      {
        ADDRESS_LIST.map((address, index) => (
          <AddressItem
            key={index}
            address={address}
          />
        ))
      }
    </dl>

  )
}
