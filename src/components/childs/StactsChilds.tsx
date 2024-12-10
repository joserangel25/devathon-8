import { useChildStore } from "../../store/childs"
import { reciveGift } from "../../utils/giftToChild"

export const StactsChilds = () => {
  const childsList = useChildStore((state) => state.childsList)

  const allReciveGift = childsList.filter((child) => {
    if (reciveGift(child.characteristics)) {
      return child
    }
  })

  return (
    <>
      <h2
        className="text-lg">
        Total niños que obtienen regalo: <span className="font-bold text-primary">
          {allReciveGift.length}
        </span>
      </h2>
      <h2
        className="text-lg">
        Total niños que no obtienen regalo: <span className="font-bold text-red-700">
          {childsList.length - allReciveGift.length}
        </span>
      </h2>
    </>
  )
}
