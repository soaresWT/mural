'use client';
import Image from 'next/image'
import icon from '../../../public/mural.png'
import ModalForm from './ModalForm';
import { useState } from 'react';

export default function Menu() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="flex h-[100px] items-center justify-between bg-[#0052FE] p-4">
            <Image src={icon} alt="Picture of the author" className="h-12 w-auto" />
            <button className="bg-white  text-blue-500 px-4 py-2 rounded " onClick={openModal}>Inscreva-se</button>
            <ModalForm isOpen={isModalOpen} closeModal={closeModal} />
        </div>

    )
}
