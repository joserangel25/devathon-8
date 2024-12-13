import { AccordionReindeer } from "../components/reindeers/Accordion"
import { AlignmentReinder } from "../components/reindeers/AlignmentReinder"
import { WeatherComponent } from "../components/reindeers/Weather"

export const ReindeersPage = () => {
  return (
    <div
      className="w-full h-full grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-4 pb-12 pt-2 divide-x divide-gray-200">
      <AlignmentReinder />
      <div className="pl-3 overflow-y-auto">
        <WeatherComponent />
        <p className="text-center font-semibold mb-3">Aprende sobre los renos de Santa 🎅 y sus habilidades 🧙‍♂️</p>
        <AccordionReindeer />
      </div>
    </div>

  )
}
