import { MapComponent, AddressList } from "../components/map"

export const Gps = () => {
  return (
    <div className="w-full h-full flex gap-2 pb-12">
      <MapComponent />
      <AddressList />
    </div>
  )
}
