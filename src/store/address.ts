import { create } from "zustand"
import type { IAddress } from "../interface/gps"
import { INIT_LOCATION } from "../const/const"



interface IAddressStore {
  address: IAddress,
  lastSearches: IAddress[],
  setAddress: (address: IAddress) => void
}

export const useAddressStore = create<IAddressStore>((set, get) => ({
  address: {
    name: '',
    address: '',
    ...INIT_LOCATION
  },
  lastSearches: [],
  setAddress: (address: IAddress) => {
    const state = get()
    const newLastSearches = [...state.lastSearches, address]

    set({
      address,
      lastSearches: newLastSearches
    })
  }
}))