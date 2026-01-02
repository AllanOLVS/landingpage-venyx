import { Founder } from '../types';
import FounderCard from './FounderCard';

interface FoundersSectionProps {
    founders: Founder[];
}

const FoundersSection = ({ founders }: FoundersSectionProps) => {
    return (
        <section id="founders" className="py-24 bg-black relative border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Liderança & <span className="text-cyan-400">Expertise</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {founders.map((founder, index) => (
                        <FounderCard key={founder.name} founder={founder} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FoundersSection;
