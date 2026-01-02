import { Cpu, Globe, Smartphone } from 'lucide-react';
import { Founder } from '../types';

export const founders: Founder[] = [
    {
        name: "Gabriel Leal",
        role: "Co-Founder & Full Stack Dev",
        icon: <Cpu className="w-6 h-6" />,
        linkedinUrl: "https://www.linkedin.com/in/gabriel-leal-santos",
        githubUrl: "https://github.com/Gabriellealsantos"
    },
    {
        name: "Allan Oliveira",
        role: "Co-Founder & Full Stack Dev",
        icon: <Globe className="w-6 h-6" />,
        linkedinUrl: "https://www.linkedin.com/in/allan-oliveira-224120260",
        githubUrl: "https://github.com/AllanOLVS"
    },
    {
        name: "Lucas Torres",
        role: "Co-Founder & Full Stack Dev",
        icon: <Smartphone className="w-6 h-6" />,
        linkedinUrl: "https://www.linkedin.com/in/lucas-torres-05879a221",
        githubUrl: "https://github.com/lucas-torres10"
    }
];
