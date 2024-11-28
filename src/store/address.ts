import { create } from "zustand"
import { getAddressesApi, setAddressApi } from "../utils/api"

import { INIT_LOCATION } from "../const/const"
import type { IAddress } from "../interface/gps"



interface IAddressStore {
  address: IAddress,
  isLoading: boolean,
  lastSearches: IAddress[],
  setAddress: (address: IAddress) => void,
  getSearches: () => void,
}

export const useAddressStore = create<IAddressStore>((set, get) => ({
  address: {
    name: '',
    address: '',
    ...INIT_LOCATION
  },
  isLoading: true,
  lastSearches: [],
  getSearches: async () => {
    const lastSearchesDb = await getAddressesApi()
    set({
      lastSearches: lastSearchesDb,
      isLoading: false
    })
  },
  setAddress: async (address: IAddress) => {
    const state = get()
    const newLastSearches = [...state.lastSearches, address]

    //TODO: pendiente se solucion CORS
    // const saveAddress = await setAddressApi(address)

    // if (saveAddress.status !== 200) {
    //   console.log(saveAddress.msg)
    //   return
    // }

    if (newLastSearches.length > 5) {
      newLastSearches.shift()
    }

    set({
      address,
      lastSearches: newLastSearches.reverse()
    })
  }
}))