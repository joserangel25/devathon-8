import clsx from "clsx";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import { useCookiesStore } from "../../store/cookies";
import 'react-circular-progressbar/dist/styles.css';


export const Sidebar = () => {
  const cookies = useCookiesStore((state) => state.cookies)
  const maxAllowedCookies = useCookiesStore((state) => state.maxCaloriesAllowed)
  const isMaxAllowedCookies = maxAllowedCookies !== null
  const percentage = isMaxAllowedCookies ? Math.round((cookies / maxAllowedCookies) * 100) : 0
  // const percentage = Math.round((cookies / maxAllowedCookies) * 100)

  return (
    <div id="left" className="w-2/6 ">
      <div className="relative w-1/2 mx-auto">
        <picture className="w-20 h-20 inset-x-0 mx-auto absolute -top-16">
          <img
            className="max-w-20 object-cover"
            src="/images/dark-cookie.png" alt="Imagen de una galleta de chocolate" />
        </picture>

        <div
          className="rounded-ss-3xl rounded-ee-3xl bg-green-200 border-2 border-primary w-44 mx-auto mt-16 pt-5 pb-3 px-2">
          <p className="text-2xl font-medium leading-5 text-slate-800">Navigalletas de chocolate</p>
          <h2 className="font-bold text-xl text-red-700 text-center mt-2">5 jojocalorias</h2>
        </div>
      </div>

      <div
        className={clsx(
          "mx-auto mt-5 ",
          {
            "hidden": isMaxAllowedCookies ? maxAllowedCookies <= 0 : true
          }
        )}
        style={{ width: 150, height: 150 }}>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: (isMaxAllowedCookies && maxAllowedCookies - cookies < 15) ? '#DC2626' : '#00873E',
            trailColor: '#98FFC7',
            textColor: (isMaxAllowedCookies && maxAllowedCookies - cookies < 15) ? '#DC2626' : '#00873E',
          })}
          value={percentage}
          text={`${percentage}%`}
        />
      </div>

      {
        isMaxAllowedCookies && maxAllowedCookies > 0 && (
          <h1 className=" text-center text-lg font-bold mt-2 md:max-w-[300px] mx-auto leading-tight">
            Máximas 🍪 permitidas para Santa:
            <span className="font-bold text-lg text-primary"> {maxAllowedCookies}</span>
          </h1>
        )
      }
    </div>
  )
}
