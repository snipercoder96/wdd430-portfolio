import Image from 'next/image';

export default function About() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="site-heading mb-4 text-2xl font-bold sm:text-3xl">About Me</h2>
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
                <Image
                    src="/me.jpg" // place your photo in the public/ folder
                    alt="Kevin Mbemba Kiyindou"
                    width={200}
                    height={200}
                    className="shrink-0 rounded-full border-4 border-[#075985]"
                    loading="lazy"
                />
                <p className="site-muted text-lg">
                    I’m Kevin Mbemba Kiyindou, a web developer in training with a strong
                    foundation in mathematics, probability, and statistics. My journey has
                    blended academic rigor with hands-on coding projects, from building
                    movie apps with APIs to troubleshooting backend connections in Node.js
                    and MongoDB.
                </p>
            </div>
        </main>
    );
}
