import { useFetch } from "../hooks/useFetch"


export const Letters = () => {
  const cartas = useFetch();
  
  return (
    <>
    <div className="container mx-auto bg-indigo-300 size-11/12 ">
      <h1 className="text-2xl text-center p-2">Christmas Letters</h1>
        <ul>
          {
          cartas?.map( carta => (
            <li key={carta.id}>{carta.titleCard}</li>
          ))
          }
        </ul>
        
    </div>
    </>
    
  )
}
