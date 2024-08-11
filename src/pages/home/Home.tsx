import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

function Home() {

    return (

        <>
            <Navbar />
            <div className="bg-indigo-900 flex justify-center">
                <div className='container text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <p className='text-xl'>[DATA ATUAL + LOCALIZAÇÃO]</p>
                        <h2 className='text-5xl font-bold items-center'>Olá, [NOME USUARIO] </h2>
                        
                        <div>
                        <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
                        <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
                        <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
                      
                        <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
                        <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
                        <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
                        <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
                        <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
                      
                        <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
                        <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
                        <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
                        <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
                        
                        <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
                        <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
                        <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
                        <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
                        </div>

                      
                        <div className="flex justify-around gap-4">

                            <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={""} alt="" className='w-2/3' />

                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
