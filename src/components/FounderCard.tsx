import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { Founder } from '../types';

interface FounderCardProps {
    founder: Founder;
    index: number;
}

const FounderCard = ({ founder, index }: FounderCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-2xl text-center hover:border-cyan-900/50 transition-colors group"
        >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-900 border-2 border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                {founder.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{founder.name}</h3>
            <p className="text-purple-400 text-sm font-medium mb-4 uppercase tracking-wider">{founder.role}</p>
            <div className="mt-6 flex justify-center gap-4">
                <a href={founder.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white transition"><Linkedin size={20} /></a>
                <a href={founder.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white transition"><Github size={20} /></a>
            </div>
        </motion.div>
    );
};

export default FounderCard;
