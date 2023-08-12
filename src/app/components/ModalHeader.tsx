import React from "react";
import { ArrowBack } from '@mui/icons-material';
import ModalHeaderProps from "../types/TypeModalHeader";

export const ModalHeader = ({ closeModal }: ModalHeaderProps) => {
    return (
        <div className='bg-[#0052FE] flex p-2 items-center h-[50px]'>
            <ArrowBack className='text-white' onClick={closeModal} />
            <h2 className='text-white m-3 font-semibold text-lg'>Inscreva-se com Login SIGAA</h2>
        </div>
    );
}