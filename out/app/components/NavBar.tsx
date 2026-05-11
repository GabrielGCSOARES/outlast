import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="bg-indigo-500 p-4 text-white flex justify-center space-x-6 text-2xl">
            <Link href={"/"}>Home</Link>
            <Link href={"/sobre"}>Sobre</Link>
            <Link href={"/form"}>Formulário</Link>
            <Link href={"/galeria"}>Galeria</Link>
            <Link href={"/tabela"}>Tabela</Link>
            <Link href={"/carousel"}>Carousel</Link>
            <Link href={"/cadastro"}>Cadastro</Link>
        </nav>
    );
}