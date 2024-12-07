interface ModalProps {
  isOpen: boolean;
  title:  string;
  description: string;
  checked:boolean;
  onToggleCheck: ()=>void;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, description, checked, onToggleCheck, onClose }) => {
  if (!isOpen) return null;

  return(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/2">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <button
          className={`mt-4 px-4 py-2 rounded ${checked? "bg-green-600" : "bg-gray-500 hover:bg-gray-600"}text-white`}
          onClick={onToggleCheck}
        >
          {checked ? "Marca como pendiente" : "Marca como leido"}
        </button>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  )
}
/*type propTypes={
  open:boolean;
  onClose: ()=>void;
  children: React.ReactNode;
}

const Modal:React.FC<propTypes> = ({open, onClose, children}) => {
  return (
    <div 
      className={`
        fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/10" : "invisible"}
      `}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow p-6 transition-all max-w-md ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
        onClick={(e)=>e.stopPropagation()}
      >
        <button className="absolute top-2 right-2 py-1 px-2 border border-neutral-200 rounded-md text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
          onClick={onClose}>
          X
        </button>
        {children}  
      </div>
    </div>
  )
}*/

export default Modal