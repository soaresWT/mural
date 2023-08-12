import React from 'react';
import ReactModal from 'react-modal';
import CustomModalProps from '../types/TypeCustomModal';


export const CustomModal: React.FC<CustomModalProps> = ({ isOpen, closeModal, children }) => {
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
            {children}
        </ReactModal>
    );
};

