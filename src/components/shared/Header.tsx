import { Link, useLocation } from "wouter"
import { MENU_LIST } from "../../const/const"
import { PlaySound } from "./PlaySound"


export const Header = () => {
  const [location] = useLocation()
  return (
    <div className="flex justify-between items-center mb-2">
      <Link href="/">
        <picture className="flex items-center m-0">
          <img src="./Tree.svg" alt="Logo de la aplicación" className="w-10 h-10 m-0" />
          <h2 className="text-3xl font-bold -ml-2">Santa<span className="text-primary">Utils</span></h2>
        </picture>
      </Link>
      <div className="flex items-center gap-2">
        <PlaySound />
        <nav className="flex gap-4 ">
          {
            MENU_LIST.map(({ path, name }) => (
              <Link
                key={path}
                href={path}
                className={`font-medium text-xl ${location === path && 'text-primary'}`}>{name}</Link>
            ))
          }
        </nav>
      </div>
    </div>
  )
}
