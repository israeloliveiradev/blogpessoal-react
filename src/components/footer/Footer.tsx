import "../../index.css";
import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react';


const Footer = () => {
  const data = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="relative w-full z-[1000] flex justify-center bg-gray-800 text-white py-2 border-t-2 border-[#bbbbbb]">
          <div className="container text-center">
            <p className="mb-2">&copy; {data} Todos os Direitos Reservados | Techstorm CO.</p>
            <div className='flex justify-center py-2 items-center'>
              <GithubLogo size={30} weight='bold' />
              <LinkedinLogo size={30} weight='bold' />
            </div>
            <div className="flex justify-center space-x-4">
              <a href="/about" className="hover:underline">Sobre</a>
              <a href="/contact" className="hover:underline">Contato</a>
              <a href="/privacy" className="hover:underline">Política de Privacidade e Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;