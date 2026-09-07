import PortfolioHero from '@/components/PortfolioHero';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <PortfolioHero
        name="Kevin Mbemba Kiyindou"
        title="Full-stack developer in training"
        summary="I build modern web experiences with a strong focus on clean code, accessible interfaces, and practical full-stack problem solving. My work blends front-end design with API integration and backend thinking."
        primaryCtaLabel="View projects"
        primaryCtaHref="/projects"
        secondaryCtaLabel="About me"
        secondaryCtaHref="/about"
      />
    </main>
  );
}