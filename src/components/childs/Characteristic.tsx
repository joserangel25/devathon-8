
import clsx from "clsx"
import { ICharacteristic } from "../../interface/child"

interface Props {
  characteristic: ICharacteristic
}

export const Characteristic: React.FC<Props> = ({ characteristic }) => {
  const { name, value } = characteristic
  return (
    <span
      title={`${name}: ${value}`}
      className={clsx(
        "inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-2.5 py-1.5 text-xs font-medium  ring-1 ring-inset  capitalize",
        {
          "bg-green-50 ring-green-600/20 text-green-600": value >= 3,
          "bg-red-50 ring-red-600/20 text-red-600": value < 3,
        }
      )}
    >{name}</span>
  )
}