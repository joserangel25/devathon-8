import { AddressItem } from "./AddressItem"
import { useAddressStore } from "../../store/address"
import clsx from "clsx"

export const AddressList = () => {
  const lastSearches = useAddressStore((state) => state.lastSearches)

  return (
    <dl
      className={
        clsx(
          "w-80 max-w-sm text-gray-900 divide-y divide-gray-200 bg-primary px-2 rounded-md overflow-y-auto",
          {
            "flex items-center justify-center transition-all duration-200": lastSearches.length === 0
          }
        )
      }
    >
      {
        lastSearches.length === 0 && (
          <p className="text-center text-white text-md ">No hay búsquedas aún.</p>
        )
      }

      {
        lastSearches.map((address, index) => (
          <AddressItem
            key={index}
            address={address}
          />
        ))
      }
    </dl>

  )
}
