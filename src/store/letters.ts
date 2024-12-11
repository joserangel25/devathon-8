import { create } from "zustand";
import { ILetter } from "../interface/letter";
import { getLettersDb } from "../utils/api";

interface ILettersStore {
  lettersList: ILetter[];
  selectedLetter: ILetter | null;
  getAllLetterList: () => void;
  setSelectedLetter: (letter: ILetter | null) => void;
}

export const useLettersStore = create<ILettersStore>((set) => ({
  lettersList: [],
  selectedLetter: null,
  getAllLetterList: async () => {
    const letters = await getLettersDb()
    set({ lettersList: letters })
  },
  setSelectedLetter: (letter: ILetter | null) => {
    set({ selectedLetter: letter })
  }
}))