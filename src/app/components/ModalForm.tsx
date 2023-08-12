"use client";
import React from 'react';
import ReactModal from 'react-modal';
import { ArrowBack } from '@mui/icons-material';
import { useState } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';


interface ModalFormProps {
    isOpen: boolean;
    closeModal: () => void;
}
const alertSucefull = () => toast.success('Login realizado com sucesso!');
const alertError = () => toast.error('Erro ao realizar login!');

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, closeModal }) => {
    const [nome, setNome] = useState('');
    const [login, setlogin] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    //const [useData, setData] = useState('');
    const router = useRouter();


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        alertSucefull();
        fetch('https://ru-avalie-sigaa-aaxysqwm0-soareswt.vercel.app/sigaa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login, senha }),
        }).then(async (res) => {
            const data = await res.json();
            console.log(data.cadeiras[0].local);
            setLoading(false); // Define o estado de loading como false após a requisição ser concluída
            if (data.cadeiras[0].local == "Campus Quixadá") {
                alertSucefull();
                localStorage.setItem('userData', JSON.stringify(data))
                router.push("./home")
            } else {
                alertError();
            }

        })
            .catch((error) => {
                console.error('Erro:', error);
                alertError();
                setLoading(false); // Caso ocorra um erro, define o estado de loading como false
                setError('Ocorreu um erro ao processar a requisição.'); // Define o erro para exibir na tela
            });
    };
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Formulário de Inscrição"
            ariaHideApp={false}
            overlayClassName={{
                base: 'fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity',
                afterOpen: 'transition-opacity ease-out duration-300 ',
                beforeClose: 'transition-opacity ease-in duration-200',
            }}
            style={{
                content: {
                    top: '40%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                    height: '60%',
                    maxHeight: '700px',
                    maxWidth: '500px',
                    borderRadius: '0.5rem',
                    border: 'none',
                    padding: '0',
                },
            }}
        >
            <div className='bg-[#0052FE] flex p-2 items-center h-[50px]'>
                <ArrowBack className='text-white' onClick={closeModal} />
                <h2 className='text-white m-3 font-semibold text-lg'>Inscreva-se com Login SIGAA</h2>
            </div>

            {loading ? (<div className="h-full flex items-center justify-center">
                <Player
                    autoplay
                    loop
                    src="https://lottie.host/f8c8372b-f0a3-4cfe-9835-fbdb6e6509bf/uvh15teMSV.json"
                    style={{ height: '300px', width: '300px' }}
                >
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </div>) : (


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
        </ReactModal>
    );
};

export default ModalForm;
