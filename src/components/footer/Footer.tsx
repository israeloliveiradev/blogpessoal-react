import React from 'react';
import "../../index.css";
import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react';

function Footer() {


  return (
    <>
      <div className="flex justify-center bg-gray-800 text-white py-2">
        <div className="container mx-auto text-center">
          <p className="mb-2">&copy; 2024 Todos os Direitos Reservados | Techstorm CO.</p>
          <div className='flex gap-2 justify-center py-2 items-center'>
            <GithubLogo size={30} weight='bold' />
            <LinkedinLogo size={30} weight='bold' />
          </div>
          <div className="flex justify-center space-x-4 py-2">
            <a href="/about" className="hover:underline">Sobre</a>
            <a href="/contact" className="hover:underline">Contato</a>
            <a href="/privacy" className="hover:underline">Política de Privacidade e Termos de Uso</a>
          </div>
        </div>
      </div >
    </>
  );
}

export default Footer;