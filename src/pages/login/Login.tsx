import React, { ChangeEvent, useContext, useEffect, useState } from 'react';

import { User, Lock, At } from '@phosphor-icons/react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

const Login = () => {

    let navigate = useNavigate();

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    );

    const { usuario, handleLogin } = useContext(AuthContext);

    const { isLoading } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home')
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
    }

    return (
        <>
            <div className="flex min-h-screen items-center justify-center bg-[#222831]" style={{ background: "url(https://i.im.ge/2024/08/09/f12sSm.eozap.webp)" }}>

                <div className="flex w-[500px] h-[600px] rounded-2xl justify-center items-center  bg-gray-800">

                    <form onSubmit={login}
                        className="flex flex-col items-center justify-center text-[#F2F2F2] gap-2">
                        <img className='h-[80px] w-[200px]' src="https://i.imgur.com/uYS1EuB.png" alt="Logo" />

                        <label className='' htmlFor="username">
                            <span>Usuario</span>
                            <div className="relative flex items-center">
                                <input className='flex rounded-xl w-80 h-9 p-3 py-5 text-[#222831] pr-10'
                                    type="text"
                                    placeholder="Usuário:"
                                    id="usuario"
                                    name="usuario"
                                    value={usuarioLogin.usuario}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                    required />
                                <At className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            </div>
                        </label>

                        <label htmlFor="password">
                            <span className=''>Senha</span>
                            <div className="relative flex items-center">
                                <input className='flex rounded-xl w-80 h-9 p-3 py-5 text-[#222831] pr-10'
                                    type="password"
                                    value={usuarioLogin.senha}
                                    name="senha"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                    placeholder="Senha:" required />
                                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black" />
                            </div>
                        </label>

                        <div className="py-4">

                            <p>
                                Ainda não tem uma conta?{' '}
                                <Link to="/signup" className="text-green-700 hover:underline">
                                    Cadastre-se
                                </Link>
                            </p>
                        </div>
                        <div className=''>
                            <button type="submit" className='bg-[#ff8000] w-40 h-12 rounded-full hover:bg-[#ff9326] flex items-center justify-center'>
                                {isLoading ? (
                                    <RotatingLines
                                        strokeColor="white"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        width="24"
                                        visible={true}
                                    />
                                ) : (
                                    <span>Entrar</span>
                                )}
                            </button>
                        </div>

                    </form>
                </div>
            </div >
        </>
    );

}

export default Login;
