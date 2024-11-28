import { useFetch } from "../hooks/useFetch"


export const Letters = () => {
  const cartas = useFetch();
  
  return (
    <>
    <div className="h-[44rem] grid bg-slate-400 overflow-scroll">
      <h1 className="text-2xl text-center p-2">Christmas Letters</h1>
      <table className="table-auto w-full mt-2 text-sm text-left">
        <thead className="bg-gray-300 font-medium">
          <tr className="border-b border-orange-300">
            <th className="py-2 pr-3">Title Card</th>
            <th className="py-2 pr-3">Content</th>
            <th className="py-2 pr-3">Was Read</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {cartas?.slice(0,20).map( carta => (
            <tr className=" hover:bg-orange-200" key={carta.id} >
              <td className="px-1 py-2 whitespace-nowrap">{carta.titleCard}</td>
              <td className="px-1 py-2 whitespace-nowrap">{carta.content}</td>
              <td className="px-1 py-2 whitespace-nowrap">
                <span className={`px-3 py-2 rounded-full font-semibold text-xs ${carta.wasRead ? "text-green-600" : "text-blue-600 bg-blue-50"}`}>
                  {carta.wasRead}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        
    </div>
    </>
    
  )
}
