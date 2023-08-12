import React from "react";

export const Footer = () => {
    return (
        <footer className="bg-slate-50 mt-3 py-5 text-center">
            <p>&copy; {new Date().getFullYear()} PET-SI. Todos os direitos reservados.</p>
        </footer>
    );
}