import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    const [currentImage, setCurrentImage] = useState(0);

    if (!project) return null;

    const nextImage = () => {
        setCurrentImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#0a0a0a] border border-gray-800 w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl shadow-purple-900/20 flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Left Side: Carousel */}
                <div className="w-full md:w-2/3 bg-black relative h-[40vh] md:h-auto flex items-center justify-center overflow-hidden">
                    <img
                        src={project.images[currentImage]}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* Controls */}
                    <div className="absolute inset-0 flex items-center justify-between p-4">
                        <button onClick={prevImage} className="p-2 rounded-full bg-black/50 text-white hover:bg-purple-600/50 transition backdrop-blur-md">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={nextImage} className="p-2 rounded-full bg-black/50 text-white hover:bg-purple-600/50 transition backdrop-blur-md">
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Indicators */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        {project.images.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentImage ? 'bg-cyan-400 w-6' : 'bg-gray-600'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Side: Details */}
                <div className="w-full md:w-1/3 p-8 flex flex-col overflow-y-auto bg-[#0F0F0F]">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-2">{project.category}</h3>
                            <h2 className="text-3xl font-bold text-white leading-tight">{project.title}</h2>
                        </div>
                        <button onClick={onClose} className="text-gray-400 hover:text-white transition">
                            <X size={28} />
                        </button>
                    </div>

                    <div className="space-y-6 flex-grow">
                        <div>
                            <h4 className="text-lg font-semibold text-purple-400 mb-2">O Desafio & Solução</h4>
                            <p className="text-gray-300 leading-relaxed text-sm">{project.description}</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-purple-400 mb-2">Stack Tecnológico</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-gray-900 border border-gray-700 text-gray-300 text-xs rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-purple-400 mb-2">Key Features</h4>
                            <ul className="space-y-2">
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectModal;
