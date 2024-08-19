import { useContext, useEffect, useState } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Postagem from '../../../models/Postagem';
import { buscar } from '../../../services/Service';
import CardPostagem from '../cardPostagem/CardPostagem';
import { toastAlerta } from '../../../utils/toastAlerta';

function ListaPostagens() {
  const [postagens, setPostagens] = useState<Postagem[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/');
    }
  }, [token]);

  async function buscarPostagens() {
    try {
      await buscar('/postagens', setPostagens, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    buscarPostagens();
  }, [postagens.length]);
  return (
    <>
      {postagens.length === 0 && (
         <div className="flex justify-center items-center h-screen">
         <MagnifyingGlass
         visible={true}
         height="200"
         width="200"
         ariaLabel="magnifying-glass-loading"
         wrapperStyle={{}}
         wrapperClass="magnifying-glass-wrapper mx-auto"
         glassColor="#c0efff"
         color="#e15b64"
         />   
         </div>
      )}
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {postagens.map((postagem) => (
          <CardPostagem key={postagem.id} post={postagem} />
        ))}
      </div>
    </>
  );
}

export default ListaPostagens;