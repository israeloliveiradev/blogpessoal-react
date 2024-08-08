import React, { useState, useRef, useEffect } from 'react';
import { UserCircle, MagnifyingGlass, List, Plus } from '@phosphor-icons/react';



function Navbar() {






    const [userDropdownOpen, setUserDropdownOpen] = useState<boolean>(false);
    const [menuDropdownOpen, setMenuDropdownOpen] = useState<boolean>(false);

    const userDropdownRef = useRef<HTMLDivElement>(null);
    const menuDropdownRef = useRef<HTMLDivElement>(null);

    const toggleUserDropdown = () => {
        setUserDropdownOpen(prev => !prev);
        setMenuDropdownOpen(false);
    };

    const toggleMenuDropdown = () => {
        setMenuDropdownOpen(prev => !prev);
        setUserDropdownOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node) &&
            menuDropdownRef.current && !menuDropdownRef.current.contains(event.target as Node)
        ) {
            setUserDropdownOpen(false);
            setMenuDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        console.log('User dropdown open:', userDropdownOpen);
        console.log('Menu dropdown open:', menuDropdownOpen);
    }, [userDropdownOpen, menuDropdownOpen]);


    return (
        <>
            <div className='w-full bg-[#4583aa] text-white py-4 px-4 flex justify-between items-center border-b border-black'>
                <div className='flex items-center relative'>

                    <div
                        className='hover:bg-[#e4e4e41e] rounded-full w-12 h-12 cursor-pointer flex items-center justify-center'
                        onClick={toggleMenuDropdown}
                        ref={menuDropdownRef}
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
                            onClick={toggleUserDropdown}
                            ref={userDropdownRef}
                        >
                            <UserCircle className="w-8 h-8 text-white" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {menuDropdownOpen && (
                    <div className="absolute left-0 flex flex-col text-white w-[300px] h-full">
                        <ul className="bg-gray-800 h-full">
                            <div className="px-4 py-10 w-full flex justify-center items-center">
                                <span className='hover:bg-gray-700 py-4 px-5 cursor-pointer flex items-center justify-center gap-2 rounded-full '>
                                    <Plus size={16} className="a" /> NOVA POSTAGEM
                                </span>
                            </div>

                            <li className="hover:bg-gray-700 py-2 px-4 cursor-pointer">Opção 2</li>
                            <li className="hover:bg-gray-700 py-2 px-4 cursor-pointer">Opção 3</li>
                        </ul>
                    </div>
                )}
            </div> {/* MENU DROPDOWN */}
            <div>
                {userDropdownOpen && (
                    <div className="absolute right-3 mt-2 bg-gray-800 text-white rounded-lg shadow-lg w-[220px] z-10 transition-all duration-2000">
                        <ul className="flex flex-col">
                            <li className="hover:bg-gray-700 py-2 px-4 cursor-pointer">Alterar Perfil</li>
                            <li className="border-t border-gray-700 hover:bg-gray-700 py-2 px-4 cursor-pointer">Sair</li>
                        </ul>
                    </div>
                )}
            </div> {/* USER DROPDOWN */}

        </>
    );
};

export default Navbar;
