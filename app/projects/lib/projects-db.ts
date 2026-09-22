// lib/projects-db.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    type: 'opensource' | 'school';
    technologies: string[];
    link?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'My First Open Source Contribution',
        description: 'A bug fix contributed to a popular library.',
        type: 'opensource',
        technologies: ['TypeScript', 'React'],
        link: 'https://github.com/example/repo'
    },
    {
        id: 2,
        title: 'Database Design Final Project',
        description: 'An ER diagram and normalized schema for a library system.',
        type: 'school',
        technologies: ['PostgreSQL', 'SQL']
    }
];

export function getProjects(type?: string | null): Project[] {
    if (type) return projects.filter(p => p.type === type);
    return projects;
}

export function getProjectById(id: number): Project | null {
    if (!Number.isInteger(id) || id <= 0) {
        return null;
    }

    return projects.find((project) => project.id === id) ?? null;
}

// project id is omitted from the interface
// creates a new project with a id key → the value gets the maximum project, then adds 1 to it, but defaults to 1
// ... spread operator adds whatever was left behind except the project id.
// pushes the new project into the mock database, returns the new project.
export function addProject(project: Omit<Project, 'id'>): Project {
    const newProject: Project = {
        id: projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1,
        ...project,
    };

    projects.push(newProject);
    return newProject;
}