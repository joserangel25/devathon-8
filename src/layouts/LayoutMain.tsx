import { ToastContainer } from 'react-toastify';
import { Header } from "../components/shared/Header"

import 'react-toastify/dist/ReactToastify.css';

interface Props {
  children: React.ReactNode
}

export const LayoutMain: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="bg-christmas min-h-screen w-full grid grid-rows-[40px,1fr,40px] px-12"
    >
      <div></div>
      <div className="relative bg-[url('./snow2-min.png')] container max-h-[1400px] mx-auto">
        <div className="bg-white absolute opacity-50 rounded-xl left-0 top-0 w-full h-full z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full z-10 p-4 ">
          <Header />
          {children}
          <ToastContainer
            autoClose={3000}
            theme='dark'
          />

        </div>

        <picture className="absolute -bottom-10 -left-10 z-10 ">
          <img src="./caja_regalo.svg" alt="Imagen de la caja de regalo" className="w-32 h-32" />
        </picture>

        <picture className="absolute -bottom-10 -right-10 z-10">
          <img src="./snowman.svg" alt="Imagen del muñeco de nieve" className="w-32 h-32" />
        </picture>
      </div>
      <div>
      </div>
    </div>
  )
}
