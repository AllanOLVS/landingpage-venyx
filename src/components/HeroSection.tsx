import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] animate-pulse delay-1000" />

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block mb-4 px-4 py-1 rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-sm text-xs text-cyan-400 tracking-widest uppercase">
                        Inovação que escala resultados
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                        Transformando Ideias em <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-400 to-cyan-400">
                            Softwares Escaláveis
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Somos especialistas em construir ecossistemas digitais complexos. De aplicativos disruptivos a sistemas corporativos robustos. A Venyx é o parceiro de tecnologia do seu crescimento.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://wa.me/5575988169508?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20projeto.%20Podemos%20conversar%3F" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border border-gray-700 text-white font-bold rounded-lg hover:border-purple-500 hover:text-purple-400 transition">
                            Solicitar Orçamento
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
            >
                <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-gray-400 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
