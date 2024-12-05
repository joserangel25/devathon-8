import { useState, useEffect } from "react";
import { useCookiesStore } from "../store/cookies";
import { InputCookie } from "../components/cookies/InputCookie";
import { Sidebar } from "../components/cookies/Sidebar";
import { CALORIES_PER_COOKIE } from "../const/const";
import { FooterCookies } from "../components/cookies/FooterCookies";
import { toast } from "react-toastify";

export const CookiesPage = () => {
  const cookies = useCookiesStore((state) => state.cookies)
  const calories = useCookiesStore((state) => state.calories)
  const getAllCookiesDB = useCookiesStore((state) => state.getAllCookiesDB)
  const addCookiesDb = useCookiesStore((state) => state.addCookiesDb)
  const [isLoading, setIsLoading] = useState(true)

  const onAddCookies = async (quantity: number) => {
    addCookiesDb(quantity, CALORIES_PER_COOKIE * quantity)
    toast.success("🍪 ¡Nuevas galletas añadidas! 🎅", {
      icon: false
    })
  }

  useEffect(() => {
    const getCookiesDB = async () => {
      await getAllCookiesDB()
      setIsLoading(false)
    }
    getCookiesDB()
  }, [getAllCookiesDB])


  return (
    <section className="w-full h-full pb-12">
      <div className=" flex gap-3">
        <Sidebar />

        <div id="right" className="flex-1 flex flex-col items-center justify-center w-full h-full">
          <div className="flex items-center gap-2 justify-center w-full min-h-7">
            <h1 className=" text-center text-2xl font-bold">
              Total navigalletas consumidas:
            </h1>
            {
              isLoading ? (
                <p className="text-slate-300 animate-pulse font-bold text-4xl">X</p>
              ) : (
                <span className="font-bold text-2xl text-primary ">{cookies}</span>
              )
            }
          </div>

          <div className="flex items-center gap-2 justify-center w-full min-h-7">
            <h1 className=" text-center text-2xl font-bold">
              Total jojocalorias consumidas:
            </h1>
            {
              isLoading ? (
                <p className="text-slate-300 animate-pulse font-bold text-2xl">X</p>
              ) : (
                <span className="font-bold text-2xl text-primary ">{calories}</span>
              )
            }
          </div>



          <InputCookie
            addCookies={onAddCookies}
          />

          <picture className="block w-full">
            <img src="/images/santa-eat.png" className="mx-auto drop-shadow-xl" alt="Imagen de Santa comiendo galleta" />
          </picture>
        </div>
      </div>

      <FooterCookies />
    </section>



  )
}
