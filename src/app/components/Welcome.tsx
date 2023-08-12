"use client";

import React from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useRouter } from 'next/navigation';


export const Welcome = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('userData');
        router.push("/")
    };
    return (
        <div className="flex flex-col h-screen p-8 w-screen justify-center items-center bg-slate-50">
            <Player
                autoplay
                loop={false}
                src="https://lottie.host/f889a3f5-b169-4045-b87e-8a355e32a4ec/ruxObkHHXo.json"
                style={{ height: '300px', width: '300px' }}
            >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
            <h1 className="font-black text-xl">Olá, Universitario</h1>
            <p className="font-semibold text-lg">Sejá bem vindo ao mural, basta clicar no botão para entrar no grupo.</p>
            <a className="select-none" href="https://t.me/muralufcquixada">
                <button className="mt-4 rounded-md h-[50px] w-[200px] bg-[#00ade9]">
                    <Player
                        autoplay
                        loop
                        src="https://lottie.host/8470a7f3-e920-4f86-93fa-a2a48668dc3d/AOTDm4Xln7.json"
                        style={{ height: '50px', width: '50px' }}
                    />
                </button>
            </a>
            <button
                className="mt-4 rounded-md h-[50px] w-[200px] bg-red-500 text-white"
                onClick={handleLogout}
            >Sair</button>
        </div >
    )
}
