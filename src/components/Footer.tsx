import { Github, Linkedin, Mail } from 'lucide-react';
import VenyxLogo from './VenyxLogo';

const Footer = () => {
    return (
        <footer id="contact" className="bg-[#050505] border-t border-gray-900 py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 mb-6">
                        <VenyxLogo />
                        <span className="text-2xl font-bold">VENYX</span>
                    </div>
                    <p className="text-gray-400 mb-6 max-w-md">
                        Ajudamos empresas ambiciosas a escalar através de tecnologia de ponta. Vamos construir o futuro juntos.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-purple-600 transition"><Linkedin size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-purple-600 transition"><Github size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-purple-600 transition"><Mail size={18} /></a>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Serviços</h4>
                    <ul className="space-y-4 text-gray-500 text-sm">
                        <li className="hover:text-cyan-400 cursor-pointer transition">Desenvolvimento Web</li>
                        <li className="hover:text-cyan-400 cursor-pointer transition">Apps Mobile (iOS/Android)</li>
                        <li className="hover:text-cyan-400 cursor-pointer transition">Sistemas Corporativos</li>
                        <li className="hover:text-cyan-400 cursor-pointer transition">Consultoria Tech</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Contato</h4>
                    <ul className="space-y-4 text-gray-500 text-sm">
                        <li>venyxtechnology@gmail.com</li>
                        <li>Brasil - Brasil</li>
                        <li>
                            <button className="mt-2 px-4 py-2 bg-purple-600/20 border border-purple-500/50 text-purple-400 rounded hover:bg-purple-600 hover:text-white transition">
                                Iniciar Projeto
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-900 mt-16 pt-8 text-center text-gray-600 text-xs">
                © {new Date().getFullYear()} Venyx Technology. Todos os direitos reservados.
            </div>
        </footer>
    );
};

export default Footer;
