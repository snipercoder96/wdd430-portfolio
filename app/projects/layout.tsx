import link from "next/link";
// app/projects/layout.tsx
export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            {/* Section-specific navigation */}
            <nav className="projects-nav max-w-full mx-auto flex items-center justify-around px-4 border-b border-gray-300 shadow-md py-4">
                <a href="/projects">Overview</a>
                <a href="/projects/opensource">Open Source</a>
                <a href="/projects/school">School</a>
            </nav>

            {/* Scoped content */}
            <div className="projects-content">
                {children}
            </div>
        </section>
    )
}
