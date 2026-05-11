"use client";

import NavBar from "../components/NavBar";
import { useState } from "react";

export default function Page() {
    const [open, setOpen] = useState(false);

    const [formData, setFormData] = useState({
        nome: "",
        email: "",
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        alert(`Nome: ${formData.nome}\nEmail: ${formData.email}`);

        setOpen(false);

        setFormData({
            nome: "",
            email: "",
        });
    }

    return (
        <div className="min-h-screen bg-gray-900">
            <NavBar />
            <div className="flex flex-col items-center justify-center p-10">
                <h3 className="p-4 text-2xl font-bold text-white">
                    CADASTRO
                </h3>
                
                <button onClick={() => setOpen(true)} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
                    ABRIR MODAL
                </button>
                
                <div className="mt-8 p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-gray-300 mb-2">
                        <span className="font-semibold text-white">Nome:</span> {formData.nome || "Não informado"}
                    </h3>
                    <h3 className="text-gray-300">
                        <span className="font-semibold text-white">E-mail:</span> {formData.email || "Não informado"}
                    </h3>
                </div>
            </div>

            {open && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300">
                    <div className="bg-gray-900 p-8 rounded-2xl w-96 shadow-2xl border border-gray-700 transform hover:scale-105 transition-all duration-300">
                        <h2 className="text-2xl font-bold mb-6 text-white">
                            Formulário
                        </h2>
                        
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="nome" placeholder="Digite seu nome" value={formData.nome} onChange={handleChange} className="w-full bg-gray-800 border-2 border-gray-600 text-white p-3 rounded-lg mb-4 placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors hover:border-purple-400"/>
                            <input type="email" name="email" placeholder="Digite seu email" value={formData.email} onChange={handleChange} className="w-full bg-gray-800 border-2 border-gray-600 text-white p-3 rounded-lg mb-6 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors hover:border-blue-400"/>
                            <div className="flex justify-end gap-3">
                                <button type="button" onClick={() => setOpen(false)} className="bg-gray-600 text-white px-5 py-2.5 rounded-lg hover:bg-gray-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg font-medium">
                                    Fechar
                                </button>
                                
                                <button type="submit" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-5 py-2.5 rounded-lg hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg font-medium">
                                    Salvar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}