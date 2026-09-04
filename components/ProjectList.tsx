import ProjectCard from './ProjectCard';

interface Project {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

interface ProjectListProps {
    projects: Project[]; // This interface defines the props that the ProjectList component will accept. It includes an array of projects, where each project adheres to the Project interface.
}
// Multiple projects are displayed in a grid layout, with each project represented by a ProjectCard component.
// The ProjectList component receives an array of projects as props and maps over them to render each ProjectCard.
export default function ProjectList({ projects }: ProjectListProps) {

    // THe ...project syntax is a spread operator that allows us to pass all properties of the project object as props to the ProjectCard component.
    // This is a concise way to pass multiple props without having to list each one individually.
    return (
        <section className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
            ))}
        </section>
    );
}