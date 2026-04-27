import Image from "next/image";
import NavBar from '../components/NavBar';

export default function Sobre() {
  return (
   <div>
      <NavBar/>
      <main className="p-6 flex flex-col items-center">
        <h1 className="text-2x1 font-bold mb-4">Quem sou eu</h1>
        <div>
          <img src="https://i.pinimg.com/736x/25/9e/06/259e06edd79559d0dd1fce29d4772817.jpg" alt="" className="rounded-lg h-100 transition-transform duration-500 hover:scale-105 "/>
        </div>
        <p className="text-center text-gray-600 mt-4 max-w-md">Sou um desenvolvedor full-stack com experiência em React, React Native e tecnologias relacionadas. Gosto de criar aplicações webs e bater em crianças no jogo online fazendo-as dar ragequit e me ameaçar de morte</p>
      </main>
    </div>
  );
}
