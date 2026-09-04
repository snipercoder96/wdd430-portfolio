// This interface defines the props that the ProjectCard component will accept.
// It includes a title, description, an array of technologies, and an optional link to the project.
// This is a blueprint for the data structure that the ProjectCard component expects, ensuring that the component receives the correct types of props.
interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}
// A ProjectCard component is a presentational component that displays information about a single project.
// Type enforcement in {title, description, technologies, link} ensures that the component receives the correct types of props, enhancing code reliability and maintainability.
export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
    return (
        <article className="site-card rounded border-l-4 p-4">
            <h3 className="site-heading mb-2 text-xl font-bold">{title}</h3>
            <p className="site-muted mb-3">{description}</p>
            <p className="site-muted text-sm">
                <strong>Technologies:</strong> {technologies.join(', ')}
            </p>
            {link && (
                <p className="mt-2">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="site-accent hover:underline">View Project</a>
                </p>
            )}
        </article>
    );
}