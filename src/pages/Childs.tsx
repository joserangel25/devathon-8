import { useEffect } from "react"
import { FormChild } from "../components/childs/FormChild"
import { ListChild } from "../components/childs/ListChild"
import { StactsChilds } from "../components/childs/StactsChilds"
import { useChildStore } from "../store/childs"

export const ChildsPage = () => {
  const getAllChilds = useChildStore((state) => state.getAllChilds)

  useEffect(() => {
    getAllChilds()
  }, [getAllChilds])

  return (
    <>
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-4 pb-12 pt-4 divide-x divide-gray-200">
        <div className="overflow-y-auto">
          <ListChild />
        </div>

        <div className="pl-3">
          <StactsChilds

          />
          <FormChild />
        </div>

      </div>
    </>
  )
}
