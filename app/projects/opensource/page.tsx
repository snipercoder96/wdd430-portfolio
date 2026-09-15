"use client";

import { useEffect, useState } from "react";

type Project = {
    id: number;
    title: string;
    description: string;
    type: "opensource" | "school";
    technologies: string[];
    link?: string;
};

export default function OpenSourcePage() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch("/api/projects?type=opensource")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <main className="mx-auto max-w-6xl px-4 py-12">
            <div className="mb-8">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#075985]">
                    Featured work
                </p>
                <h1 className="site-heading text-3xl font-bold sm:text-4xl">Open Source Projects</h1>
            </div>

            {projects.map((project) => (
                <div key={project.id} className="mb-4 rounded border border-slate-200 p-4 shadow-sm">
                    <h2 className="text-xl font-bold text-slate-800">{project.title}</h2>
                    <p className="mt-2 text-slate-600">{project.description}</p>
                </div>
            ))}
        </main>
    );
}