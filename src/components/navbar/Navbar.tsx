import React, { useState, useRef, useEffect } from 'react';
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

    return (
        <>
            <div className='w-full bg-[#4583aa] text-white py-4 px-4 flex justify-between items-center border-b-2 border-[#bbbbbb]'>
                <div className='flex items-center relative'>

                    <div
                        ref={menuRef} onClick={() => setOpenMenu(!openMenu)} className='hover:bg-[#e4e4e41e] rounded-full w-12 h-12 cursor-pointer flex items-center justify-center'
                    >
                        <List size={28} />
                    </div>

                    <div className='cursor-pointer select-none'>
                        <img src="https://i.imgur.com/LTDAnX9.png" alt="Logo" />
                    </div>
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


            <div className={`relative left-0 flex z-[9] flex-col text-white w-[280px] h-full transition-all duration-1000 ${openMenu ? 'w-[280px]' : 'open-menu'}`}>

                <div className="px-4 py-10 w-full flex justify-start flex-col bg-[#4583aa] h-full">

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
            </div> {/* MENU DROPDOWN */}
            <div>
            </div >

            <div>
                <div className={`fixed right-3 mt-2 bg-gray-800 text-white rounded-lg shadow-lg h-[90px] w-[220px] z-10 transition-all duration-1000 ${openUserMenu ? 'h-[90px]' : 'closed-user-menu'}`}>

                    <ul className="flex flex-col py-2">
                        <li className="hover:bg-gray-700 py-2 px-4 cursor-pointer">Alterar Perfil</li>
                        <li className="border-t border-gray-700 hover:bg-gray-700 py-2 px-4 cursor-pointer">Sair</li>
                    </ul>
                </div>
            </div> {/* USER DROPDOWN */}
        </>



    );

};

export default Navbar;
