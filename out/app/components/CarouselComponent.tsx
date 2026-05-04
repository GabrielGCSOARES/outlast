"use client" //necessario pra lidar com dados de putas gulosas

import { useState, useEffect } from "react"

const images = [
    "https://i.pinimg.com/736x/43/01/34/4301341160014a0af99ddf0c3faeef9b.jpg",
    "https://i.pinimg.com/736x/22/b3/7e/22b37e956b40524c2b450b8d2b06e1e5.jpg",
    "https://i.pinimg.com/736x/4a/50/3a/4a503a7428a052451ed98e01afb7acac.jpg"
]

export default function CarouselComponent() {
    const [current, setCurrent] = useState(0); //pega o indice da imagem no vetor
    
    useEffect(() =>{ //controle de eventos na tela
        const interval = setInterval(() => {
            setCurrent((prev) => prev === images.length - 1 ? 0 : prev + 1);
        }, 3000); //troca a cada 3 segundos

        return () => clearInterval(interval);
    }, [])

    return(
        <div className="relative w-full max-w-2xl mx-auto ">
            <img src={images[current]} className="w-600 h-80  object-cover rounded-2xl shadow-lg transition-all duration-500" alt="" />
        </div>
    )
}