import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'
import Navbar from '../../navbar/Navbar'

interface CardTemaProps {
  tema: Tema
}




function CardTemas({tema}: CardTemaProps) {
  <Navbar/>
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-[#276c97] text-white font-bold text-2xl uppercase flex items-center justify-center'>{tema.autor}</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>
      <div className="flex">
        <Link to={`/editarTema/${tema.id}`} className='w-full text-slate-100 bg-[#4583AA] hover:bg-[#276c97] flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarTema/${tema.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardTemas