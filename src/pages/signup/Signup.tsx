import React, { ChangeEvent, useEffect, useState } from 'react';
import { User, Lock, Image, At } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';
import { toastAlerta } from '../../utils/toastAlerta';

function Signup() {
    let navigate = useNavigate()

    const [confirmaSenha, setConfirmaSenha] = useState<string>("")
  
    const [usuario, setUsuario] = useState<Usuario>({
      id: 0,
      nome: '',
      usuario: '',
      senha: '',
      foto: ''
    })
  
    const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
      id: 0,
      nome: '',
      usuario: '',
      senha: '',
      foto: ''
    })
  
    useEffect(() => {
      if (usuarioResposta.id !== 0) {
        back()
      }
    }, [usuarioResposta])
  
    function back() {
      navigate('/login')
    }
  
    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
      setConfirmaSenha(e.target.value)
    }
  
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
      setUsuario({
        ...usuario,
        [e.target.name]: e.target.value
      })
    }
  
    async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()
  
      if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
  
        try {
          await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
          toastAlerta('Usuário cadastrado com sucesso', 'sucesso')
  
        } catch (error) {
          toastAlerta('Usuário cadastrado com sucesso', 'sucesso')
        }
  
      } else {
        toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro')
        setUsuario({ ...usuario, senha: "" }) 
        setConfirmaSenha("")                  
      }
    }
  

    return (
        <>
            <div className="flex min-h-screen items-center justify-center bg-[#222831]" style={{ background: "url(https://i.im.ge/2024/08/09/f12sSm.eozap.webp)" }}>
                <div className="flex w-[500px] h-[600px] rounded-2xl justify-center items-center  bg-gray-800">
                    <form onSubmit={cadastrarNovoUsuario} className="flex flex-col items-center justify-center text-[#F2F2F2] gap-2 py-3">
                        <img className='h-[80px] w-[200px] ' src="https://i.imgur.com/uYS1EuB.png" alt="Logo" />
                        
                        <div className="relative w-80">
                            <input
                                className='flex rounded-xl w-full h-9 p-3 py-5 text-[#222831]'
                                type="text" 
                                placeholder="Nome:" 
                                id='nome'
                                name="nome"
                                required
                                value={usuario.nome}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                            <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>

                        <div className="relative w-80">
                            <input
                                className='flex rounded-xl w-full h-9 p-3 py-5 text-[#222831]'
                                type="text" 
                                id="usuario"
                                name="usuario"
                                placeholder="E-mail:" 
                                value={usuario.usuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                required 
                            />
                            <At className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>

                        <div className="relative w-80">
                            <input
                                className='flex rounded-xl w-full h-9 p-3 py-5 text-[#222831]'
                                type="password"
                                placeholder="Senha:" 
                                id='senha'
                                name="senha"
                                value={usuario.senha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                required 
                            />
                            <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>

                        <div className="relative w-80">
                            <input
                                className='flex rounded-xl w-full h-9 p-3 py-5 text-[#222831]'
                                type="password"
                                placeholder="Confirmar Senha:" 
                                id='confirmarSenha'
                                name="confirmarSenha"
                                value={confirmaSenha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                                required 
                            />
                            <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>

                        <div className="relative w-80">
                            <input
                                className='flex rounded-xl w-full h-9 p-3 py-5 text-[#222831]'
                                type="text" 
                                placeholder="Foto:" 
                                id='foto'
                                name="foto"
                                value={usuario.foto}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                required 
                            />
                            <Image className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                        
                        <div className='flex py-3 gap-3'>
                            <button
                                className='bg-[#ff000085] w-40 px-3 h-12 rounded-full hover:bg-[#ff4848b6]' 
                                type="button"
                                onClick={back}
                            >
                                Cancelar
                            </button>

                            <button
                                className='bg-[#ff8000] w-40 h-12 rounded-full hover:bg-[#ff9326]' 
                                type="submit" >
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;
