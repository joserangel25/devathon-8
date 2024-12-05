import { create } from "zustand";
import { getCookiesAndCaloriesDB, setCookiesDB } from "../utils/api";
import { toast } from "react-toastify";

interface ICookiesStore {
  cookies: number,
  calories: number,
  maxCaloriesAllowed: number | null,
  addCookiesDb: (cookies: number, calories: number) => void,
  getAllCookiesDB: () => void,
  setMaxAllowedCookies: (maxAllowed: number | null) => void,
}

export const useCookiesStore = create<ICookiesStore>((set, get) => ({
  cookies: 0,
  calories: 0,
  maxCaloriesAllowed: null,
  addCookiesDb: async (newCookies: number, newCalories: number) => {
    const state = get()
    const actuallyCookies = state.cookies
    if (typeof state.maxCaloriesAllowed === 'number') {
      if (actuallyCookies + newCookies > state.maxCaloriesAllowed) {
        toast.error('🍪 Lo siento, son demasiadas navigalletas para santa 😥', {
          icon: false
        })
        return
      }
    }
    set({
      cookies: actuallyCookies + newCookies,
      calories: state.calories + newCalories
    })
    await setCookiesDB({ quantityCookies: newCookies, quantityCalories: newCalories })
  },
  getAllCookiesDB: async () => {
    const cookies = await getCookiesAndCaloriesDB()
    set({
      cookies: cookies.quantityTotalCookies,
      calories: cookies.quantityTotalCalories
    })
  },
  setMaxAllowedCookies: (maxAllowed: number | null) => {
    set({
      maxCaloriesAllowed: maxAllowed
    })
  }
}))