import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';


export const ErrorPage = () => {
    return (
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
    )
}