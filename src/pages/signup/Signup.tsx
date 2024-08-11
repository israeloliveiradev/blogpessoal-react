import React from 'react';
import { User, Lock } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';


function Signup() {
    return (
        <>
            <div className="flex min-h-screen items-center justify-center bg-[#222831]" style={{ background: "url(https://i.im.ge/2024/08/09/f12sSm.eozap.webp)" }}>

                <div className="flex w-[500px] h-[600px] rounded-2xl justify-center items-center  bg-gray-800">

                    <form action="" className="flex flex-col items-center justify-center text-[#F2F2F2] gap-2">
                        <img className='h-[80px] w-[200px]' src="https://i.imgur.com/uYS1EuB.png" alt="Logo" />
                        
                        <label className='' htmlFor="nome">
                            <span>Nome</span>
                            <input className='flex rounded-xl w-80 h-9 p-3 py-5 text-[#222831]' type="text" placeholder="Nome:" required />
                            <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </label>

                        <label className='' htmlFor="usuario">
                            <span>Usuario</span>
                            <input className='flex rounded-xl w-80 h-9 p-3 py-5 text-[#222831]' type="text" placeholder="E-mail:" required />
                            <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </label>

                        <label htmlFor="password">
                            <span className=''>Senha</span>
                            <input className='flex rounded-xl w-80 h-9 p-3 py-5 text-[#222831]' type="password" placeholder="Senha:" required />
                            <span><Lock className=" flex absolute right-3 text-black" /></span>
                        </label>

                        <label className='' htmlFor="foto">
                            <span>Foto</span>
                            <input className='flex rounded-xl w-80 h-9 p-3 py-5 text-[#222831]' type="text" placeholder="Foto:" required />
                            <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </label>


                        <div className='py-3'>

                        <Link to="/login">
                        <label className='py-5 px-1' htmlFor="">
                            <button className='bg-[#ff000085] w-40 h-12 rounded-full hover:bg-[#ff4848b6]' type="submit">Cancelar</button>
                        </label></Link> 

                        <Link to="/home">
                        <label className='py-5 px-1' htmlFor="">
                            <button className='bg-[#ff8000] w-40 h-12 rounded-full hover:bg-[#ff9326]' type="submit">Cadastrar</button>
                        </label></Link> 
                        </div>
               


                    </form>

                    
                </div>
            </div>
        </>

    );

}

export default Signup;
