import { useState } from 'react'
import { toast } from 'react-toastify'
import clsx from 'clsx'
import { useCookiesStore } from '../../store/cookies'

export const FooterCookies = () => {
  const setMaxAllowedCookies = useCookiesStore((state) => state.setMaxAllowedCookies)
  const maxAllowedCookies = useCookiesStore((state) => state.maxCaloriesAllowed)
  const cookiesStore = useCookiesStore((state) => state.cookies)
  const [showLimitCookies, setShowLimitCookies] = useState(false)
  const [saveInitialNumber, setSaveInitialNumber] = useState(false)
  const [limitCookies, setLimitCookies] = useState(0)

  const onAddAllowebCookies = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (limitCookies === 0) {
      toast.error("🍪 ¡No puedes ingresar cero galletas! 😢", {
        icon: false
      })
      return
    }

    if (limitCookies < cookiesStore) {
      toast.error('🍪 No puedes establecer menos galletas de las que ya se comió santa 😥', {
        icon: false,
      })
      return
    }

    setMaxAllowedCookies(limitCookies)
    setSaveInitialNumber(true)

    toast.success("🍪 Límite de galletas establecido 🎅", {
      icon: false
    })
  }

  const resetLimitCookies = () => {
    setLimitCookies(0)
    setShowLimitCookies(false)
    setSaveInitialNumber(false)
    setMaxAllowedCookies(null)
  }

  return (
    <footer className="w-2/3 mx-auto mt-5" onSubmit={onAddAllowebCookies}>
      <form className="flex items-center justify-between lg:h-[36px]">
        <span className="font-semibold text-gray-800">¿Límite de galletas esta temporada?</span>

        <div className="flex items-center gap-2">
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              id="switch"
              type="checkbox"
              className="peer sr-only py-2"
              checked={showLimitCookies}
              onChange={(e) => {
                setShowLimitCookies(e.target.checked)
                setSaveInitialNumber(false)
                setLimitCookies(0)
                if (!e.target.checked) {
                  setMaxAllowedCookies(null)
                }
              }}
            />
            <label htmlFor="switch" className="hidden"></label>
            <div className="peer h-6 w-11 rounded-full border bg-slate-400 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
          </label>
          <div className="space-x-4">
            <input
              type="number"
              className={"w-14 py-2 pl-2 rounded-lg focus:outline-primary  disabled:bg-slate-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150"}
              autoFocus={showLimitCookies}
              disabled={!showLimitCookies}
              value={limitCookies === 0 ? '' : limitCookies}
              readOnly={saveInitialNumber && maxAllowedCookies !== null && maxAllowedCookies > 0}
              onChange={(e) => setLimitCookies(Number(e.target.value))}
            />

            <button
              type="button"
              title="Restablecer límite de galletas"
              // disabled={!showLimitCookies || Boolean(limitCookies)}
              onClick={resetLimitCookies}
              className={clsx(
                "text-white bg-red-700 hover:bg-red-500 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:cursor-not-allowed disabled:bg-slate-400 disabled:opacity-50 transition-all duration-150",
                {
                  "inline-block": limitCookies > 0 && saveInitialNumber,
                  "hidden": limitCookies <= 0 || !saveInitialNumber
                }
              )}>
              Restablecer
            </button>

            <button
              type="submit"
              title="Agregar 1 galleta"
              disabled={!showLimitCookies || saveInitialNumber}
              className={clsx(
                "text-white bg-primary hover:bg-green-900 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:cursor-not-allowed disabled:bg-slate-400 disabled:opacity-50 transition-all duration-150",
                {
                  "hidden": saveInitialNumber
                }
              )}>
              Guardar
            </button>
          </div>
        </div>
      </form>
    </footer>
  )
}
