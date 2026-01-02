import VenyxLogo from './VenyxLogo';

interface NavbarProps {
    scrolled: boolean;
}

const Navbar = ({ scrolled }: NavbarProps) => {
    return (
        <nav className={`fixed top-0 w-full z-40 transition-all duration-300 border-b ${scrolled ? 'bg-black/80 backdrop-blur-md border-gray-800 py-3' : 'bg-transparent border-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <VenyxLogo />
                    <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
                        VENYX <span className="text-cyan-400">TECHNOLOGY</span>
                    </span>
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <a href="#work" className="hover:text-purple-400 transition">Projetos</a>
                    <a href="#founders" className="hover:text-cyan-400 transition">Time</a>
                    <a href="https://linktr.ee/venyxtechnology" target="_blank" rel="noopener noreferrer" className="px-5 py-2 border border-purple-500 text-purple-400 rounded-full hover:bg-purple-500 hover:text-white transition-all">
                        Fale Conosco
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
