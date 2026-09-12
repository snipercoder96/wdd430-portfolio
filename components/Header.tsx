"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="site-header py-4 shadow-md">
            <div
                id="header-title"
                className="max-w-4xl mx-auto px-4 text-xl font-bold sm:text-2xl"
            >
                Kevin Mbemba Kiyindou
            </div>
            <nav className="max-w-4xl mx-auto flex items-center justify-between px-4">
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                aria-current={pathname === link.href ? "page" : undefined}
                                className={pathname === link.href ? "border-b-2 border-indigo-600" : "border-b-2 border-transparent hover:border-indigo-600"}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
