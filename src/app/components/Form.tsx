import React from 'react';
import FormProps from '../types/TypeForm';

export const Form: React.FC<FormProps> = ({ handleLogin, login, setlogin, senha, setSenha, error }) => {
    return (
        <form className='p-8' onSubmit={handleLogin}>
            <div className="mb-4">
                <label htmlFor="nome" className="block text-left text-gray-700">Nome:</label>
                <input type="text" id="nome" className="w-full bg-gray-200 px-4 py-2 rounded-md" />
            </div>
            <div className="mb-4">
                <label htmlFor="login" className="block text-left text-gray-700">Login:</label>
                <input type="text" id="login" value={login} onChange={(e) => setlogin(e.target.value)} className="w-full bg-gray-200 px-4 py-2 rounded-md" />
            </div>
            <div className="mb-4">
                <label htmlFor="senha" className="block text-left text-gray-700">Senha:</label>
                <input type="password" autoComplete='off' id="senha" value={senha}
                    onChange={(e) => setSenha(e.target.value)} className="w-full bg-gray-200 px-4 py-2 rounded-md" />
            </div>
            <button type="submit" className="w-full mt-1 bg-blue-500 text-white py-2 rounded-md">Enviar</button>
            {error && <p className="text-red-500 mb-4">{error}</p>}
        </form>
    )

}