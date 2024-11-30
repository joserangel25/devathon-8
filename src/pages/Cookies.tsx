import { useState, useEffect } from "react";
import { getCookiesAndCaloriesDB, setCookiesDB } from "../utils/api";
import { InputCookie } from "../components/cookies/InputCookie";
import { CALORIES_PER_COOKIE } from "../const/const";
import { Sidebar } from "../components/cookies/Sidebar";

export const CookiesPage = () => {

  const [totalCookies, setTotalCookies] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const addCookies = async (quantity: number) => {
    setTotalCookies(totalCookies + quantity)
    await setCookiesDB({
      quantityCookies: quantity,
      quantityCalories: CALORIES_PER_COOKIE * quantity
    })
  }
  const totalCalories = CALORIES_PER_COOKIE * totalCookies

  useEffect(() => {
    const getCookiesDB = async () => {
      const cookies = await getCookiesAndCaloriesDB()
      setTotalCookies(cookies.quantityTotalCookies)
      setIsLoading(false)

    }
    getCookiesDB()
  }, [])


  return (
    <div className="w-full h-full pb-12 flex gap-3">
      <Sidebar />

      <div id="right" className="flex-1 ">
        <div className="flex items-center gap-2 justify-center w-full min-h-7">
          <h1 className=" text-center text-3xl font-bold">
            Total navigalletas consumidas:
          </h1>
          {
            isLoading ? (
              <p className="text-slate-300 animate-pulse font-bold text-4xl">X</p>
            ) : (
              <span className="font-bold text-4xl text-primary ">{totalCookies}</span>
            )
          }
        </div>

        <div className="flex items-center gap-2 justify-center w-full min-h-7">
          <h1 className=" text-center text-2xl font-bold">
            Total jojolorias consumidas:
          </h1>
          {
            isLoading ? (
              <p className="text-slate-300 animate-pulse font-bold text-4xl">X</p>
            ) : (
              <span className="font-bold text-3xl text-primary ">{totalCalories}</span>
            )
          }
        </div>

        <InputCookie
          addCookies={addCookies}
        />

        <picture className="block w-full">
          <img src="/images/santa-eat.png" className="mx-auto drop-shadow-xl" alt="Imagen de Santa comiendo galleta" />
        </picture>
      </div>
    </div>
  )
}
