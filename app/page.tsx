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


export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="site-heading mb-4 text-3xl font-bold sm:text-4xl">My Portfolio</h1>
        <p className="site-muted text-lg">
          I&apos;m a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}