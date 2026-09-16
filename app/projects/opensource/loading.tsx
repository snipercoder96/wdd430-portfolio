export default function Loading() {
    return (
        <main className="mx-auto max-w-6xl px-4 py-12" aria-busy="true" aria-label="Loading open source projects">
            <div className="mb-8">
                <div className="mb-2 h-4 w-32 animate-pulse rounded bg-slate-200" />
                <div className="h-10 w-72 animate-pulse rounded bg-slate-200 sm:w-96" />
            </div>

            <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="rounded border border-slate-200 p-4 shadow-sm">
                        <div className="h-7 w-2/3 animate-pulse rounded bg-slate-200" />
                        <div className="mt-3 h-5 w-full animate-pulse rounded bg-slate-100" />
                        <div className="mt-2 h-5 w-5/6 animate-pulse rounded bg-slate-100" />
                    </div>
                ))}
            </div>
        </main>
    );
}