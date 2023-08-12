"use client";
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form } from './Form';
import { Loading } from './Loading';
import { ModalHeader } from './ModalHeader';
import { CustomModal } from './CustomModal';
import ModalFormProps from '../types/TypeModalForm';

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, closeModal }) => {
    const [login, setlogin] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        fetch('https://ru-avalie-sigaa-aaxysqwm0-soareswt.vercel.app/sigaa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login, senha }),
        }).then(async (res) => {
            const data = await res.json();
            setLoading(false);
            if (data.cadeiras[0].local == "Campus Quixadá") {
                localStorage.setItem('userData', JSON.stringify(data))
                router.push("./home")
            } else {
                alert("Você não é um aluno do campus Quixadá")
            }

        })
            .catch((error) => {
                console.error('Erro:', error);
                setLoading(false);
                setError('Ocorreu um erro ao processar a requisição.');
            });
    };
    return (
        <CustomModal isOpen={isOpen} closeModal={closeModal}>
            <ModalHeader closeModal={closeModal} />
            {loading ? (
                <Loading />
            ) : (
                <Form
                    handleLogin={handleLogin}
                    login={login}
                    setlogin={setlogin}
                    senha={senha}
                    setSenha={setSenha}
                    error={error}
                />
            )
            }
        </CustomModal>
    );
};

export default ModalForm;





