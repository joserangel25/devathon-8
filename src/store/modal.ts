import { create } from "zustand"

interface IModalStore {
  isModalOpen: boolean,
  setIsModalOpen: (isModalOpen: boolean) => void
}

export const useModalStore = create<IModalStore>((set) => ({
  isModalOpen: true,
  setIsModalOpen: (isModalOpen: boolean) => {
    set({ isModalOpen })
  }
}))