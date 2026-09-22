import Link from "next/link";

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            {/* Section-specific navigation */}
            <nav className="projects-nav max-w-full mx-auto flex items-center justify-around px-4 border-b border-gray-300 shadow-md py-4">
                <Link href="/projects">Overview</Link>
                <Link href="/projects/opensource">Open Source</Link>
                <Link href="/projects/school">School</Link>
                <Link href="/projects/create">Create Project</Link>
            </nav>

            {/* Scoped content */}
            <div className="projects-content">
                {children}
            </div>
        </section>
    )
}
