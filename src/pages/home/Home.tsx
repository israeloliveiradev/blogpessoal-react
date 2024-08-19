import React, { useContext } from 'react';


import Navbar from '../../components/navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';

const Home = () => {

    const { usuario } = useContext(AuthContext);
    let navigate = useNavigate()
    const nome = usuario.nome

    return (

        <>
            <div className="bg-[#ececec] flex justify-center">
                <div className='container text-gray-800'>
                    <div className="flex flex-col gap-4 items-center justify-center py-10">
                        {/* <p className='text-xl'>[DATA ATUAL + LOCALIZAÇÃO]</p> */}
                        <h2 className='text-5xl font-bold items-center'>Olá, {nome} </h2>
                        
                        <div>
                        <p className='text-xl'>Expresse aqui seus pensamentos e opiniões</p>
                
    
                        </div>

                      
                        <div className="flex justify-around gap-4">
                        <ModalPostagem />

                        <Link to="/postagens">  
                            <button className='rounded bg-[#ff8000] text-[#1f2937] py-3 px-4'>Ver postagens</button>
                        </Link>
                        </div> 
                    </div>

                    <div className="flex justify-center ">
                        <img src={""} alt="" className='w-2/3' />

                    </div>
                </div>
            </div>
            <ListaPostagens />
        </>
    )
}

export default Home
