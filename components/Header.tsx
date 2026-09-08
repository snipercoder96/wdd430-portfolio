import Link from 'next/link'; // Avoids full page reloads

export default function Header() {
    return (
        <header className="site-header py-4 shadow-md">
            <div id="header-title" className="max-w-4xl mx-auto px-4 text-xl font-bold sm:text-2xl">Kevin Mbemba Kiyindou</div>
            <nav className="max-w-4xl mx-auto flex items-center justify-between px-4">
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
}


