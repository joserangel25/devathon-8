import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';

export const Sidebar = () => {
  const galletas = 10
  return (
    <div id="left" className="w-2/6 h-full">
      <div className="relative w-1/2 mx-auto">
        <picture className="w-28 h-28 inset-x-0 mx-auto absolute -top-20">
          <img
            className="max-w-28 object-cover"
            src="/images/dark-cookie.png" alt="Imagen de una galleta de chocolate" />
        </picture>

        <div
          className="rounded-ss-3xl rounded-ee-3xl bg-green-200 border-2 border-primary w-44 mx-auto mt-20 pt-10 pb-5 px-2">
          <p className="text-2xl font-medium leading-5 text-slate-800">Navigalles de chocolate</p>
          <h2 className="font-bold text-xl text-red-700 ">10 jojocalorias</h2>
        </div>
      </div>

      <div className="mx-auto mt-5" style={{ width: 150, height: 150 }}>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: galletas > 100 ? '#DC2626' : '#00873E',
            trailColor: '#98FFC7',
            textColor: galletas > 100 ? '#DC2626' : '#00873E',
          })}
          value={galletas}
          text={`${galletas}%`}

        />
      </div>
    </div>
  )
}
