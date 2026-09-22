import Link from "next/link";
import { getProjectById } from "../../lib/projects-db";
import { notFound } from "next/navigation";

export default async function DeleteProjectPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    // Next, convert id to a number:
    const projectId = Number(id);

    // Then find the project:
    const project = getProjectById(projectId); // implement

    if (!project) {
        notFound();
    }

    // Finally, return the confirmation UI.
    return (
        <main>
            <h1>Delete {project.title}?</h1>

            <p>{project.description}</p>

            <p>This action cannot be undone.</p>

            <Link href="/projects">Cancel</Link>

            <form>
                <button type="submit">Delete Project</button>
            </form>
        </main>
    );
}