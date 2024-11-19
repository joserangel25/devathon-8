import { useFetch } from "../hooks/useFetch"


export const Letters = () => {
  const cartas = useFetch();
  
  return (
    <>
    <div className="container mx-auto bg-indigo-300 size-11/12 ">
      <h1 className="text-2xl text-center p-2">Christmas Letters</h1>
      <table className="table-auto w-full mt-2">
        <thead className="bg-gray-300">
          <tr className="border-b border-orange-300 uppercase">
            <th >Title Card</th>
            <th >Content</th>
            <th>Read date</th>
          </tr>
        </thead>
        <tbody>
          {cartas?.slice(0,20).map( carta => (
            <tr className=" hover:bg-orange-200" key={carta.id} >
              <td className="px-4 py-1">{carta.titleCard}</td>
              <td className="px-4 py-1">{carta.content}</td>
              <td className="px-4 py-1">{carta.date_read}</td>
            </tr>
          ))}
        </tbody>
      </table>
        
    </div>
    </>
    
  )
}
