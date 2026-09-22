import { createProject } from '@/app/projects/actions';

export default function CreateProjectPage() {
    return (
        <main className="mx-auto max-w-2xl px-4 py-12">
            <div className="mb-8">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#075985]">
                    Project management
                </p>
                <h1 className="site-heading text-3xl font-bold sm:text-4xl">Create a project</h1>
            </div>

            <form action={createProject} className="space-y-6 rounded border border-slate-200 bg-white p-6 shadow-sm">
                <div>
                    <label htmlFor="title" className="mb-2 block font-semibold text-slate-800">Title</label>
                    <input id="title" name="title" required className="w-full rounded border border-slate-300 px-3 py-2" />
                </div>

                <div>
                    <label htmlFor="description" className="mb-2 block font-semibold text-slate-800">Description</label>
                    <textarea id="description" name="description" required rows={5} className="w-full rounded border border-slate-300 px-3 py-2" />
                </div>

                <div>
                    <label htmlFor="type" className="mb-2 block font-semibold text-slate-800">Project type</label>
                    <select id="type" name="type" required defaultValue="" className="w-full rounded border border-slate-300 px-3 py-2">
                        <option value="" disabled>Select a type</option>
                        <option value="opensource">Open source</option>
                        <option value="school">School</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="technologies" className="mb-2 block font-semibold text-slate-800">Technologies</label>
                    <input id="technologies" name="technologies" required placeholder="TypeScript, React" className="w-full rounded border border-slate-300 px-3 py-2" />
                </div>

                <div>
                    <label htmlFor="link" className="mb-2 block font-semibold text-slate-800">Project link</label>
                    <input id="link" name="link" type="url" className="w-full rounded border border-slate-300 px-3 py-2" />
                </div>

                <button type="submit" className="rounded bg-[#075985] px-4 py-2 font-semibold text-white hover:bg-[#064e70]">
                    Create project
                </button>
            </form>
        </main>
    );
}
