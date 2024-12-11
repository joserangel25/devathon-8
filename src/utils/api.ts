import { URL_API_BACK } from "../const/env"
import type { IAddress, IAddressResponse } from "../interface/gps"
import type { ICookieAndCalorieResponse, ICookieAndCalorieRequest } from "../interface/api"
import type { IChild, IChildPost } from "../interface/child"
import { ILetter } from "../interface/letter"

// Addresses
export const getAddressesApi = async () => {
  try {
    const res = await fetch(`${URL_API_BACK}/addresses`)
    const lastSearchesDb = await res.json()
    return lastSearchesDb.map((address: IAddressResponse) => ({
      name: address.name,
      address: address.address,
      longitude: Number(address.longitude),
      latitude: Number(address.latitude)
    }))
  } catch (error) {
    console.log(error)
    return []
  }
}

export const setAddressApi = async (address: IAddress) => {
  try {
    const res = await fetch(`${URL_API_BACK}/addresses`, {
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
}

// Cookies
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

// Childs
export const addNewChildApi = async (child: IChildPost) => {
  try {
    const res = await fetch(`${URL_API_BACK}/childs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(child)
    })
    const data = await res.json()
    return {
      error: false,
      msg: "Child added 👶",
      child: data
    }
  } catch (error) {
    console.log(error)
    return {
      error: true,
      msg: "👶 Error al guardar. Intentalo de nuevo."
    }
  }
}

export const editChildApi = async (child: IChildPost) => {
  try {
    const res = await fetch(`${URL_API_BACK}/childs`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(child)
    })
    const data = await res.json()
    return {
      error: false,
      msg: "Se guardaron los cambios 👶",
      child: data
    }
  } catch (error) {
    console.log(error)
    return {
      error: true,
      msg: "👶 Error al grabar. Intentalo de nuevo."
    }
  }
}

export const getAllChildsDb = async (): Promise<IChild[]> => {
  try {
    const res = await fetch(`${URL_API_BACK}/childs`)
    const data: IChild[] = await res.json()
    return data.reverse()
  } catch (error) {
    console.log(error)
    return []
  }
}

export const deleteChildApi = async (idChild: number) => {
  try {
    const res = await fetch(`${URL_API_BACK}/childs/id/${idChild}`, {
      method: 'DELETE'
    })
    const data = await res.text()
    return {
      error: false,
      msg: "El niño ha sido eliminado 👶",
      child: data
    }
  } catch (error) {
    console.log(error)
    return {
      error: true,
      msg: "👶 Error al eliminar. Intentalo de nuevo."
    }
  }
}

// Letters
// const cardsURL = "https://vivacious-elegance-production.up.railway.app/api/v1/christmas-cards"
/* https://673b2441339a4ce4451ad0d8.mockapi.io/cards*/

export const getLettersDb = async () => {
  try {
    const data = await fetch(`${URL_API_BACK}/christmas-cards`)
    const letters: ILetter[] = await data.json()
    return letters
  } catch (error) {
    console.log(error)
    return []
  }
}
