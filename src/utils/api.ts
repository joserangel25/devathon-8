import { URL_API_BACK } from "../const/env"
import type { IAddress } from "../interface/gps"

export const getAddressesApi = async () => {
  try {
    const res = await fetch(`${URL_API_BACK}/address`)
    const lastSearchesDb = await res.json()
    return lastSearchesDb
  } catch (error) {
    console.log(error)
    return []
  }
}

export const setAddressApi = async (address: IAddress) => {
  try {
    const res = await fetch(`${URL_API_BACK}/address`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(address)
    })
    await res.json()
    return {
      status: res.status,
      msg: "Búsqueda guardada en la Base de Datos"
    }
  } catch (error) {
    console.log(error)
    return {
      status: 500,
      msg: "Error al guardar la búsqueda"
    }
  }
}import { URL_API_BACK } from "../const/env"
import type { ICookieAndCalorieResponse, ICookieAndCalorieRequest } from "../interface/api"

export const getCookiesAndCaloriesDB = async (): Promise<ICookieAndCalorieResponse> => {
  const res = await fetch(`${URL_API_BACK}/counter-calories`)
  const data = await res.json()
  return data
}

export const setCookiesDB = async (newData: ICookieAndCalorieRequest) => {
  try {
    const res = await fetch(`${URL_API_BACK}/counter-calories`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData)
    })
    await res.json()

    return {
      error: false,
      msg: "Galletas registradas 🍪"
    }
  } catch (error) {
    console.log(error)
    return {
      error: true,
      msg: "🍪 Error al guardar. Intentalo de nuevo."
    }
  }
}