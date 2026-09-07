import Link from 'next/link';

interface PortfolioHeroProps {
    name: string;
    title: string;
    summary: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
}

export default function PortfolioHero({
    name,
    title,
    summary,
    primaryCtaLabel,
    primaryCtaHref,
    secondaryCtaLabel,
    secondaryCtaHref,
}: PortfolioHeroProps) {
    return (
        <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm md:p-10">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#075985]">
                    Full-stack developer
                </p>
                <h1 className="site-heading mb-4 text-4xl font-black tracking-tight sm:text-5xl">
                    {name}
                </h1>
                <p className="mb-3 text-lg font-medium text-[#0b4f71] sm:text-xl">{title}</p>
                <p className="max-w-2xl text-base leading-7 text-black sm:text-lg">{summary}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                        href={primaryCtaHref}
                        className="rounded-md bg-[#075985] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0b4f71]"
                    >
                        {primaryCtaLabel}
                    </Link>

                    <Link
                        href={secondaryCtaHref}
                        className="rounded-md border border-[#7dd3fc] bg-sky-50 px-5 py-3 text-sm font-semibold text-[#0b4f71] transition hover:border-[#075985] hover:bg-sky-100"
                    >
                        {secondaryCtaLabel}
                    </Link>
                </div>
            </div>
        </section>
    );
}
