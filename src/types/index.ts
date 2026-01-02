import { ReactNode } from 'react';

export interface Project {
    id: number;
    title: string;
    category: string;
    thumbnail: string;
    images: string[];
    description: string;
    stack: string[];
    features: string[];
}

export interface Founder {
    name: string;
    role: string;
    icon: ReactNode;
    linkedinUrl: string;
    githubUrl: string;
}
