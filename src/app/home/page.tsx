'use client'

import { useEffect, useState } from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';


const Home = () => {
    const [UserData, setUserData] = useState(null);

    useEffect(() => {
        const userDataJSON = localStorage.getItem('userData');
        if (userDataJSON) {
            const userData = JSON.parse(userDataJSON);
            setUserData(userData);
        }
    }, []);

    return (
        <div>
            {UserData ? (
                <div className="flex flex-col h-screen w-screen justify-center items-center bg-slate-50">
                    <Player
                        autoplay
                        loop={false}
                        src="https://lottie.host/f889a3f5-b169-4045-b87e-8a355e32a4ec/ruxObkHHXo.json"
                        style={{ height: '300px', width: '300px' }}
                    >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                    <h1 className="font-black text-xl">Olá, {UserData.nome}</h1>
                    <p className="font-semibold text-lg">Sejá bem vindo ao mural, basta clicar no botão para entrar no grupo.</p>
                    <button className="mt-4 rounded-md h-[50px] w-[200px] bg-[#00ade9]">
                        <Player
                            autoplay
                            loop
                            src="https://lottie.host/8470a7f3-e920-4f86-93fa-a2a48668dc3d/AOTDm4Xln7.json"
                            style={{ height: '50px', width: '50px' }}
                        />
                    </button>
                </div>
            ) : (
                <div className="h-screen w-screen flex-col flex items-center justify-center">
                    <Player
                        autoplay
                        loop
                        src="https://lottie.host/bb34c51a-bc56-452f-88c1-7ea354697ac1/QkKZkglzrD.json"
                        style={{ height: '300px', width: '300px' }}
                    />
                    <p className="text-lg">Você não está logado</p>
                    <h4>Click <a href="/" className="text-[#00ade9]">aqui</a> para logar</h4>
                </div>

            )}
        </div>

    );
};

export default Home;