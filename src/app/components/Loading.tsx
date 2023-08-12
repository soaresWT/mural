import React from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';


export const Loading = () => {
    return (
        <div className="h-full flex items-center justify-center">
            <Player
                autoplay
                loop
                src="https://lottie.host/f8c8372b-f0a3-4cfe-9835-fbdb6e6509bf/uvh15teMSV.json"
                style={{ height: '300px', width: '300px' }}
            >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
        </div>
    )
}
