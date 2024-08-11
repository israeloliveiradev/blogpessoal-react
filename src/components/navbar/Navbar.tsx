import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserCircle, MagnifyingGlass, List, Plus, PencilSimpleLine, PaintBrushBroad, HandFist } from '@phosphor-icons/react';
import '../../index.css';

function Navbar() {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [openUserMenu, setOpenUserMenu] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const userMenuRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setOpenMenu(false);
        }
        if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
            setOpenUserMenu(false);
        }
    };

    useEffect(() => {
        if (openMenu || openUserMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openMenu, openUserMenu]);

    const Login = () => {
        let navigate = useNavigate()
    }

    return (
        <>

            <div className='bg-[#4583aa] text-white py-4 px-4 border-b-2 border-[#bbbbbb] z-[1000] relative '>
                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <div
                            ref={menuRef}
                            onClick={() => setOpenMenu(!openMenu)}
                            className='hover:bg-[#e4e4e41e] rounded-full w-12 h-12 cursor-pointer flex items-center justify-center'
                        >
                            <List size={28} />
                        </div>

                        <Link to="/"><div className='ml-4 cursor-pointer select-none'>
                            <img src="https://i.imgur.com/LTDAnX9.png" alt="Logo" />
                        </div></Link>

                    </div>
                    <form action="" className='flex mx-4'>
                        <div className='relative flex items-center'>
                            <input
                                type="search"
                                placeholder="Digite o que você procura"
                                className="w-[440px] h-10 px-4 rounded-full bg-[#e4e4e41e] border-none focus:outline-none focus:border-none placeholder-[#ffffff5d] pr-12"
                            />
                            <button className='absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-transparent'>
                                <MagnifyingGlass size={24} />
                            </button>
                        </div>
                    </form>
                    <div className='flex items-center'>
                        <div className='hover:underline mr-4'>Sobre</div>
                        <div className='hover:underline mr-4'>Contato</div>
                        <div className='relative'>
                            <div
                                className="hover:bg-[#e4e4e41e] rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
                                ref={userMenuRef} onClick={() => setOpenUserMenu(!openUserMenu)}
                            >
                                <UserCircle className="w-8 h-8 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {openMenu && (
                <div
                    className="fixed inset-0 bg-[#00000096]"
                    onClick={() => setOpenMenu(false)}
                ></div>
            )}
            <div className={`absolute left-0 flex text-white transition-all duration-1000 h-[90vh] overflow-hidden ${openMenu ? 'w-[280px] ' : 'w-0'}`}>
                <div className="px-4 py-10 flex justify-start flex-col bg-[#4583aa] rounded-e-lg z-[990]">

                    <button className='bg-[#ed8011] hover:bg-[#fa9a39] py-4 px-2 cursor-pointer flex items-center justify-center gap-2 rounded-full w-[200px]'>
                        <Plus size={24} />
                        <span className="flex items-center ">NOVA POSTAGEM</span>
                    </button>
                    <ul className='py-10 w-full flex flex-col'>
                        <li className="bg-[#4583aa] hover:bg-[#95a9b6] py-2 px-4 cursor-pointer w-full">
                            <div className='flex items-center gap-2'>
                                <PencilSimpleLine size={24} />
                                <span className='text-[16px]'>POSTAGENS</span>
                            </div>
                        </li>
                        <li className="bg-[#4583aa] hover:bg-[#95a9b6] py-2 px-4 cursor-pointer">
                            <div className='flex items-center gap-2'>
                                <PaintBrushBroad size={24} />
                                <span className='text-[16px]'>TEMAS</span>
                            </div>
                        </li>
                        <li className="bg-[#4583aa] hover:bg-[#95a9b6] py-2 px-4 cursor-pointer">
                            <div className='flex items-center gap-2'>
                                <PaintBrushBroad size={24} />
                                <span className='text-[16px]'>CRIAR TEMA</span>
                            </div>
                        </li>
                        <li className="bg-[#4583aa] hover:bg-[#95a9b6] py-2 px-4 cursor-pointer">
                            <div className='flex items-center gap-2'>
                                <HandFist size={24} />
                                <span className='text-[16px]'>TESTE 1</span>
                            </div>
                        </li>
                        <li className="bg-[#4583aa] hover:bg-[#95a9b6] py-2 px-4 cursor-pointer">
                            <div className='flex items-center gap-2'>
                                <HandFist size={24} />
                                <span className='text-[16px]'>TESTE 2</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`absolute right-2 top-[125px] z-[100] flex flex-col rounded-xl bg-gray-800 text-white w-[220px] h-[95px] transition-all duration-500 ${openUserMenu ? 'h-[95px]' : 'close-user-menu'}`}>
                <ul className="flex flex-col py-2">
                    <li className="hover:bg-gray-700 py-2 px-4 cursor-pointer ">Alterar Perfil</li>
                    <Link to="/login"><li className="hover:bg-gray-700 py-2 px-4 cursor-pointer ">Sair</li></Link>    
                </ul>
            </div >
        </>
    );

}

export default Navbar;