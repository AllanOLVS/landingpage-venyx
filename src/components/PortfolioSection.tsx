import { Project } from '../types';
import ProjectCard from './ProjectCard';

interface PortfolioSectionProps {
    projects: Project[];
    onSelectProject: (project: Project) => void;
}

const PortfolioSection = ({ projects, onSelectProject }: PortfolioSectionProps) => {
    return (
        <section id="work" className="py-24 bg-[#050505] relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Nossos <span className="text-purple-500">Projetos</span></h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            onClick={() => onSelectProject(project)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
