import { useEffect } from "react"
import clsx from "clsx"
import { AddressItem } from "./AddressItem"
import { useAddressStore } from "../../store/address"

export const AddressList = () => {
  const lastSearches = useAddressStore((state) => state.lastSearches)
  const getSearches = useAddressStore((state) => state.getSearches)
  const isLoading = useAddressStore((state) => state.isLoading)

  useEffect(() => {
    const onLoadSearches = async () => {
      await getSearches()
    }

    onLoadSearches()
  }, [getSearches])

  return (
    <dl
      className={
        clsx(
          "w-80 max-w-sm text-gray-900 divide-y divide-gray-200 px-2 bg-primary rounded-md overflow-y-auto",
          {
            "flex items-center justify-center transition-all duration-200": lastSearches.length === 0,
            "bg-primary": !isLoading,
            "bg-gray-400 animate-pulse": isLoading
          }
        )
      }
    >
      {
        isLoading && (
          <p className="text-white text-center">Cargando...</p>
        )
      }
      {
        (lastSearches.length === 0 && !isLoading) && (
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
