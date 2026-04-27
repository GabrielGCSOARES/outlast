"use client" //sem o use client, você usa o useState e UseEffect, mas não vai funcionar 
import NavBar from '../components/NavBar';
import {useState} from "react";

//mockando dados - simulanod dados de uma API.
type User = {
  id: number;
  name: string;
  email: string;
};
//dados fake só para iniciar a tabela.
const initialData: User[] = [
  {id: 1, name: "João Silva", email: "joão@email.com"},
  {id: 2, name:"Clécio narcos", email:"clecio@email.com"},
  {id: 3, name:"Felca Sidinei", email: "felca@email.com"},
];

export default function DataTable(){
  const [data, setData] = useState<User[]>(initialData);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  function handleDelete(id: number) {
    setData(data.filter((item) => item.id !== id));
  }

  function handleEdit(
    id: number,
    currentName: string,
    currentEmail: string
  ){
    setEditingId(id);
    setNewName(currentName);
    setNewEmail(currentEmail);
  }

  function handleSave(id: number) {
    setData(
      data.map((item) =>
        item.id === id
          ? { ...item, name: newName, email: newEmail }
          : item
      )
    );
    setEditingId(null);
  }

  return(
  <>
    <NavBar />
    <div className="p-6">
      <div className=" shadow-lg rounded-2x1 p-4">
        <h2 className="text-x1 font-semibold mb-4">Tabela de Usuários</h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2">Nome</th>
              <th className="p-2">Email</th>
              <th className="p-2 text-center">Ações</th>
            </tr>
          </thead>

          <tbody>
            {data.map((user) => (
              <tr key={user.id} className="border-b transition-all duration-200 hover:bg-gray-800 hover:shadow-md hover:scale-[1.01]">
                <td className="p-2">
                  {editingId === user.id ? (
                    <input className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" value={newName} onChange={(e) => setNewName(e.target.value)}/> ) : (user.name)
                  }
                </td>

                <td className="p-2">
                  {editingId === user.id ? (
                    <input
                      className="border p-1 rounded"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                    />
                  ) : (
                    user.email
                  )}
                </td>

                <td className="p-2 flex gap-2 justify-center">
                  {editingId === user.id ? (
                    <button onClick={() => handleSave(user.id)} className="bg-green-500 text-white px-3 py-1 rounded-lg transition-all duration-200 hover:bg-green-600 active:scale-95">Salvar</button> ) : (
                     <button onClick={() => handleEdit(user.id, user.name, user.email)} className="bg-blue-500 text-white px-3 py-1 rounded-lg transition-all duration-200 hover:bg-blue-600 active:scale-95">Editar</button>)}
                    <button onClick={() => handleDelete(user.id)} className="bg-red-500 text-white px-3 py-1 rounded-lg transition-all duration-200 hover:bg-red-600 active:scale-95">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {data.length === 0 && (
          <p className="text-center text-gray-500 mt-4">Nenhum usuário encontrado</p>
        )}
      </div>
    </div>
  </>
  );
}