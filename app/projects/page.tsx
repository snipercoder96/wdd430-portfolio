import ProjectList from '@/components/ProjectList';

const projects = [
    {
        title: 'Movie App (WDD 330 Final)',
        description: 'A full-stack app that integrates OMDb/TMDb APIs for movie details and YouTube Data API for trailers.',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'YouTube API'],
        link: 'https://github.com/snipercoder96/wdd330'
    },
    {
        title: 'PawnSchool',
        description: 'A chess teaching site inspired by the idea that pawns are in school until they graduate by promotion.',
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        link: 'https://github.com/snipercoder96/wdd231/tree/main/final'
    },
    {
        title: 'HyperMarkup Mentor',
        description: 'A webpage that provides practical tips and guidance for writing clean, effective HTML markup.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://github.com/snipercoder96/wdd131/tree/main/project'
    },
    {
        title: 'Portfolio (WDD 430)',
        description: 'My full-stack portfolio project showcasing Next.js, API routes, and MongoDB integration.',
        technologies: ['Next.js', 'React', 'MongoDB', 'Tailwind CSS'],
        link: 'https://github.com/snipercoder96/wdd430-portfolio'
    }
];

export default function ProjectsPage() {
    return (
        <main className="mx-auto max-w-6xl px-4 py-12">
            <div className="mb-8">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#075985]">
                    Featured work
                </p>
                <h1 className="site-heading text-3xl font-bold sm:text-4xl">Recent Projects</h1>
            </div>

            <ProjectList projects={projects} />
        </main>
    );
}
