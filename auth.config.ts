// auth.config.ts  (project root)
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login', // use your own login page instead of the Auth.js default
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const pathname = nextUrl.pathname;

            const isProtected =
                pathname === '/projects/create' ||
                /^\/projects\/[^/]+\/(edit|delete)$/.test(pathname);

            if (isProtected && !isLoggedIn) {
                return false;
            }

            if (isLoggedIn && pathname === '/projects/create') {
                return Response.redirect(new URL('/', nextUrl));
            }

            return true;
        },
    },
    providers: [], // providers are added in auth.ts
} satisfies NextAuthConfig;