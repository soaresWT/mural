import React from 'react';
import ilustration from '../../../public/Vector.png'

const BackgroundIllustration = () => {
    return (
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url(../../../public/Vector.png)" }}>
            {/* Conteúdo do componente com a ilustração de background */}
        </div>
    );
};

export default BackgroundIllustration;
