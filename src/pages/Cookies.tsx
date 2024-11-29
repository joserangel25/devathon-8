import { useState, useEffect } from "react";
import { getCookiesAndCaloriesDB, setCookiesDB } from "../utils/api";
import { InputCookie } from "../components/cookies/InputCookie";
import { CALORIES_PER_COOKIE } from "../const/const";

export const CookiesPage = () => {

  const [totalCookies, setTotalCookies] = useState(0)

  const addCookies = async (quantity: number) => {
    setTotalCookies(totalCookies + quantity)
    await setCookiesDB({
      quantityCookies: quantity,
      quantityCalories: CALORIES_PER_COOKIE * quantity
    })
  }

  useEffect(() => {
    const getCookiesDB = async () => {
      const cookies = await getCookiesAndCaloriesDB()
      setTotalCookies(cookies.quantityTotalCookies)
    }
    getCookiesDB()
  }, [])


  return (
    <div className="w-full h-full  pb-12">
      <h1 className=" text-center text-3xl font-bold">
        Total galletas comidas: <span className="font-bold text-4xl text-primary">{totalCookies}</span>
      </h1>

      <div className="mx-auto flex flex-col items-center mt-5">
        <h2 className="font-semibold text-lg">Total calorías consumidas</h2>
        <p className="text-center text-2xl font-bold">
          {CALORIES_PER_COOKIE * totalCookies} calorías
        </p>
      </div>

      <InputCookie
        addCookies={addCookies}
      />

      <picture className="block w-full">
        <img src="/images/santa-eat.png" className="mx-auto" alt="Imagen de Santa comiendo galleta" />
      </picture>
    </div>
  )
}
