import Link from "next/link";

export default function ProjectNotFound() {
    return (
        <main className="mx-auto flex min-h-[60vh] max-w-2xl items-center justify-center px-4 py-16">
            <div className="w-full rounded-lg border border-[#b8c9d9] bg-white p-8 text-center shadow-sm">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#075985]">
                    Projects
                </p>
                <h1 className="text-3xl font-bold text-[#102a43]">Project not found</h1>
                <p className="mt-3 text-[#1f3d52]">We could not find that project.</p>

                <Link
                    href="/projects"
                    className="mt-6 inline-block rounded-md bg-[#0b4f71] px-4 py-2 font-semibold text-white transition hover:bg-[#075985]"
                >
                    Back to projects
                </Link>
            </div>
        </main>
    );
}