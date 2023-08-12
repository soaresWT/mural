import React from "react";

interface CardProps {
    children: React.ReactNode;
    headerText: string;
}
export const Card = ({ children, headerText }: CardProps) => {
    return (
        <div className="bg-pink-100 bg-opacity-60 backdrop-blur-sm flex rounded-[15px] items-center flex-col w-2/5 min-w-[370px] h-1/5 min-h-[310px] mt-8 shadow-lg">
            <div className='bg-[#0052FE] font-semibold text-[2rem] rounded-t-[15px] flex p-2 items-center w-full text-white'>{headerText}</div>
            <div className="p-2 text-[1.2rem]"> {children}</div>
        </div>
    );
}