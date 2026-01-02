import { Project } from '../types';

export const projects: Project[] = [
    {
        id: 1,
        title: "FinTech Scale System",
        category: "Web Application",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Um sistema financeiro robusto desenvolvido para escalar operações de crédito. O desafio era processar milhares de transações simultâneas mantendo a segurança bancária. Criamos uma arquitetura de microsserviços que reduziu a latência em 40%.",
        stack: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
        features: ["Processamento em Tempo Real", "Dashboard Analítico", "Segurança Nível Bancário"]
    },
    {
        id: 2,
        title: "HealthTrack App",
        category: "Mobile App (iOS/Android)",
        thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Aplicativo de monitoramento de saúde integrado a wearables. O objetivo era criar uma interface intuitiva para idosos e pacientes crônicos. Utilizamos React Native para garantir performance nativa em ambas as plataformas.",
        stack: ["React Native", "Firebase", "HealthKit", "TypeScript"],
        features: ["Integração Bluetooth", "Alertas em Tempo Real", "Chat com Médicos"]
    },
    {
        id: 3,
        title: "E-commerce Logistics Core",
        category: "Enterprise System",
        thumbnail: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=800&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
        ],
        description: "Sistema de gestão logística para um grande player de varejo. A solução automatizou o roteamento de entregas e gestão de estoque, resultando em uma economia de 25% nos custos operacionais.",
        stack: ["Next.js", "Python", "Redis", "Google Maps API"],
        features: ["Roteamento Inteligente", "Gestão de Frota", "Relatórios Automatizados"]
    }
];
