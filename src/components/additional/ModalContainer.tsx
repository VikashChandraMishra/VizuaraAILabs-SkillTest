import React from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
    toggleModal: Function;
};

const ModalContainer: React.FC<Props> = ({ children, className = '', toggleModal }) => {
        return (
        <div className={`fixed inset-0 z-10 w-screen p-4 flex justify-center items-center ${className}`}>
            <div className="-z-10 fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex justify-end" aria-hidden="true" onClick={() => toggleModal()}>
            </div>
            {children}
        </div>
    );
};

export default ModalContainer;
