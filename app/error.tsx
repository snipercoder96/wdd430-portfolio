'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest: string }; reset: () => void }) {
    useEffect(() => {
        console.error("Error occured", error);
    }, [error]);

    return (
        <div className="mx-auto mt-16 max-w-xl rounded-lg border border-[#b8c9d9] bg-[#ffffff] p-6 text-center shadow-sm">
            <h1 className="text-2xl font-bold text-[#102a43]">Something went wrong!</h1>
            <p className="mt-3 text-[#1f3d52]">An unexpected error occurred. Please try again later.</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                    onClick={reset}
                    className="rounded-md bg-[#0b4f71] px-4 py-2 font-semibold text-white transition hover:bg-[#075985]"
                >
                    Try Again
                </button>
                <Link
                    href="/projects"
                    className="rounded-md border border-[#b8c9d9] px-4 py-2 font-semibold text-[#075985] transition hover:bg-[#f4f8fc]"
                >
                    Go Back to Projects
                </Link>
            </div>
        </div>
    )
}