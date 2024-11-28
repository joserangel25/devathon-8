import { useEffect } from "react"
import { AddressItem } from "./AddressItem"
import { useAddressStore } from "../../store/address"
import clsx from "clsx"

export const AddressList = () => {
  const lastSearches = useAddressStore((state) => state.lastSearches)
  const getSearcches = useAddressStore((state) => state.getSearches)
  const isLoading = useAddressStore((state) => state.isLoading)

  useEffect(() => {
    const onLoadSearches = async () => {
      //TODO: pendiente se solucion CORS 
      // await getSearcches()
    }

    onLoadSearches()
  }, [getSearcches])

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
      {/* TODO: Realizar cuando se de solucion CORS */}
      {/* {
        isLoading && (
          <p className="text-center text-white text-md ">Cargando...</p>
        )
      } */}
      {
        (lastSearches.length === 0) && (
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
