import { create } from "zustand";
import { ILetter } from "../interface/letter";
import { checkLetterRead, getLettersDb } from "../utils/api";
import { toast } from "react-toastify";

interface ILettersStore {
  lettersList: ILetter[];
  selectedLetter: ILetter | null;
  getAllLetterList: () => void;
  setSelectedLetter: (letter: ILetter | null) => void;
  readLetter: (id: number) => void;
}

export const useLettersStore = create<ILettersStore>((set, get) => ({
  lettersList: [],
  selectedLetter: null,
  getAllLetterList: async () => {
    const letters = await getLettersDb()
    set({ lettersList: letters })
  },
  setSelectedLetter: (letter: ILetter | null) => {
    set({ selectedLetter: letter })
  },
  readLetter: async (id: number) => {
    const letterRead = await checkLetterRead(id)
    if (letterRead.error) {
      toast.error(letterRead.msg, {
        icon: false
      })
      return
    }

    const letters = get().lettersList
    const newLetters = letters.map((letterTem) => letterTem.id === id ? { ...letterTem, wasRead: true } : letterTem)
    set({ lettersList: newLetters })

    toast.success(letterRead.msg, {
      icon: false
    })
  }
}))