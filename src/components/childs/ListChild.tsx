import { CardChild } from "./CardChild"
import { useChildStore } from "../../store/childs"

export const ListChild = () => {
  const childsList = useChildStore((state) => state.childsList)

  return (
    <ul className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-3">
      {
        childsList.map((child) => {
          return <CardChild key={child.idChild} child={child} />
        })
      }
    </ul>
  )
}
