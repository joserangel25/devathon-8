import { create } from "zustand"
import { toast } from "react-toastify"
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
    longitude: INIT_LOCATION.lng,
    latitude: INIT_LOCATION.lat
  },
  isLoading: true,
  lastSearches: [],
  getSearches: async () => {
    const lastSearchesDb = await getAddressesApi()
    set({
      lastSearches: lastSearchesDb,
      isLoading: false,
      address: lastSearchesDb[0]
    })
  },
  setAddress: async (address: IAddress) => {
    const state = get()
    const lastSearches = state.lastSearches
    const existAddress = lastSearches.find(addressTem => addressTem.address === address.address)
    if (existAddress) {
      set({ address })
      return
    }

    const newLastSearches = [address, ...lastSearches]
    const saveAddress = await setAddressApi(address)

    if (saveAddress.status !== 200) {
      console.log(saveAddress.msg)
      toast.error(saveAddress.msg, {
        icon: false
      })
      return
    }

    if (newLastSearches.length > 5) {
      newLastSearches.pop()
    }
    set({
      address,
      lastSearches: newLastSearches
    })
  }
}))