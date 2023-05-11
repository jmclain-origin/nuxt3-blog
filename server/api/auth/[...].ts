import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google';
export default NuxtAuthHandler({
    secret: process.env.AUTH_SECRET,
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
           clientId: process.env.GITHUB_CLIENT_ID,
           clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        // @ts-expect-error You need to use.default here for it to work during SSR. May be fixed via Vite at some point
        GoogleProvider.default({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            scope: ['profile', 'email'],

        }),
        // @ts-expect-error You need to use.default here for it to work during SSR. May be fixed via Vite at some point
        CredentialsProvider.default({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: 'Username' },
                password: { label: 'Password', type: 'text', placeholder: 'Password' },
            },
            authorize(credentials: any) {
                return { credentials }
            }

        })
    ]
})

