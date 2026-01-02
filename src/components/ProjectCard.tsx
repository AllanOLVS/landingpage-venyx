import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
    index: number;
    onClick: () => void;
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
            onClick={onClick}
        >
            <div className="relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900 shadow-lg group-hover:shadow-purple-900/20 group-hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4">
                        <span className="text-xs font-bold text-cyan-400 bg-black/50 backdrop-blur-md px-2 py-1 rounded border border-cyan-500/30">
                            {project.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors flex items-center gap-2">
                            {project.title} <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                            {project.description}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.stack.slice(0, 3).map(tech => (
                            <span key={tech} className="text-xs text-gray-500 border border-gray-800 px-2 py-1 rounded">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
