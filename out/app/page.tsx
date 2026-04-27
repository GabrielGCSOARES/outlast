import Image from "next/image";
import NavBar from './components/NavBar'

export default function Home() {
  return (
   <div>
      <NavBar/>
      <main className="">
        <div className="flex flex-col grid grid-cols-4 gap-4 items-center p-10 justify-center text-center">
          <img src="https://i.pinimg.com/736x/17/57/4f/17574f50858d7a0417515a57c8c3d71d.jpg" alt="fotoHome" className="rounded-lg shadow-lg mb-6 transition-transform duration-500 hover:scale-105 h-80"/> 
          <img src="https://i.pinimg.com/736x/16/81/7b/16817bc1364ca6ce8efb7b9bc486a87f.jpg" alt="fotoHome" className="rounded-lg shadow-lg mb-6 transition-transform duration-500 hover:scale-105 h-80"/>
          <img src="https://i.pinimg.com/736x/79/c2/0b/79c20b550e82890e674ec7eee64c2500.jpg" alt="fotoHome" className="rounded-lg shadow-lg mb-6 transition-transform duration-500 hover:scale-105 h-80"/>
          <img src="https://i.pinimg.com/736x/de/34/44/de34440c6c1eaa5c07e1f7f56300614f.jpg" alt="fotoHome" className="rounded-lg shadow-lg mb-6 transition-transform duration-500 hover:scale-105 h-80"/>
          <img src="https://i.pinimg.com/736x/06/c0/55/06c05586de3aefbd432a1774303c3aa4.jpg" alt="fotoHome" className="rounded-lg shadow-lg mb-6 transition-transform duration-500 hover:scale-105 h-80"/>
          <img src="https://i.pinimg.com/736x/4b/19/39/4b19398b6f516d60874a89c85d5d1687.jpg" alt="fotoHome" className="rounded-lg shadow-lg mb-6 transition-transform duration-500 hover:scale-105 h-80"/>
          <img src="https://i.pinimg.com/1200x/d9/5a/bd/d95abdc21910f1091ae73f405e68cbc8.jpg" alt="fotoHome" className="rounded-lg shadow-lg mb-6 transition-transform duration-500 hover:scale-105 h-80"/>
          <img src="https://i.pinimg.com/736x/9d/cf/9c/9dcf9c767dab35e90777974034b98b9b.jpg" alt="fotoHome" className="rounded-lg shadow-lg mb-6 transition-transform duration-500 hover:scale-105 h-80"/>
          <img src="https://i.pinimg.com/736x/c3/0b/fe/c30bfeefbcb0a672df43a5c505149ae6.jpg" alt="fotoHome" className="rounded-lg shadow-lg mb-6 transition-transform duration-500 hover:scale-105 h-80"/>
          <img src="https://i.pinimg.com/736x/8a/f6/7c/8af67cdc1dba701be4af347a0c53eb56.jpg" alt="fotoHome" className="rounded-lg shadow-lg mb-6 transition-transform duration-500 hover:scale-105 h-80"/>
          {/* picsum.photos */}
        </div>
        <div className="flex flex-col items-center font-semibold text-white">
          <h1>SIMSIMSISMISMSIMSIMSISMMISMISISMSIMSIMS</h1>
        </div>
      </main>
    </div>
  );
}
