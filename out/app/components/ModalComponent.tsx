"use client"

import { on } from "events"
import { use, useEffect } from "react"
 
export default function ModalComponent({ isOpen, onClose, children}: any) {
    useEffect(() => { //pega evento de teclado
        function handle(e:any){
            if(e.key == "Escape") onClose() //se for a tecla escape, ele fecha o modal
        }
        window.addEventListener("keydown", handle) //adiciona o evento no teclado
        return() => window.removeEventListener("keydown", handle) //remove o evento de teclado quando o component for desmontado
    }, [onClose])

    if(!isOpen) return null //se modal não estiver aberto, não redenriza nada

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">X</button>
                {children}
            </div>
        </div>
    )
}