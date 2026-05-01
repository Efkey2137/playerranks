"use client";
interface NavbarButtonProps {
    text: string;
    onClick?: () => void;
}

const NavbarButton = ({ text, onClick }: NavbarButtonProps) => {
    return (
        <button 
        onClick={onClick}
        className="text-left  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-full h-full" >
            {text}
        </button>
    );
}

export default NavbarButton;