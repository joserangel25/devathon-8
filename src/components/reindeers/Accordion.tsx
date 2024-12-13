import { REINDEERS_LIST } from "../../const/reindeers"


export const AccordionReindeer = () => {
  return (
    <div className="bg-slate-100 h-full grid divide-y divide-neutral-200">
      {
        REINDEERS_LIST.map((reindeer) => (
          <div key={reindeer.id} className="py-3">
            <details className="group">
              <summary className="flex justify-between items-center font-medium ml-4 list-none">
                <span className=""> {reindeer.name}</span>
                <span className="transition group-open:rotate-180 mr-4">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn ml-4">
                {reindeer.description}
              </p>
              <p className="text-neutral-600  group-open:animate-fadeIn ml-4 font-bold">
                Habilidad: <span className="text-primary font-normal">{reindeer.hability}</span>
              </p>

              <p className="text-neutral-600  group-open:animate-fadeIn ml-4 font-bold">
                Especialista en tiempos: <span className="text-primary font-normal">{reindeer.specializingIn}</span>
              </p>
            </details>
          </div>
        ))
      }
    </div>
  )
}
