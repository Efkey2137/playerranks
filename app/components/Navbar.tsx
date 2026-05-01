import NavbarButton from "./NavbarButton";


interface NavbarProps {
    setActiveTab: (tab: string) => void;
}

const Navbar = ({ setActiveTab }: NavbarProps) => {
    return (
        <nav className="flex flex-col gap-4">
            <div className="mb-4">
                <h1 className="text-xl font-bold p-4">Player Ranks</h1>
            </div>

            <NavbarButton text="Dashboard" onClick={() => setActiveTab("home")} />
            <NavbarButton text="Players" onClick={() => setActiveTab("players")} />
        </nav>
    );
}

export default Navbar;