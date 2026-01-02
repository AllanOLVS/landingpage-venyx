import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';

// Components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import FoundersSection from './components/FoundersSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

// Data
import { projects } from './data/projects';
import { founders } from './data/founders';

// Types
import { Project } from './types';

function App() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
            <Navbar scrolled={scrolled} />
            <HeroSection />
            <PortfolioSection projects={projects} onSelectProject={setSelectedProject} />
            <FoundersSection founders={founders} />
            <Footer />

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
