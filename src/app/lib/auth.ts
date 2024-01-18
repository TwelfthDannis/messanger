import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth, {NextAuthOptions} from "next-auth";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {prisma} from "./db";
import {compare} from "bcrypt";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXT_PUBLIC_SECRET,
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/log",
        signOut: "/logout",
        error: "/"
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "email", placeholder: "email@gmail.com"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) {
                    throw "Invalid credentials";
                }

                const existingUser = await prisma.user.findFirst({
                    where: {email: credentials?.email},
                });

                if (!existingUser || !(await compare(credentials.password, existingUser.password))) {
                    throw "Invalid credentials";
                }
                return {
                    id: `${existingUser.id}`,
                    name: existingUser.username,
                    email: existingUser.email,
                }
            }
        })
    ],
    debug: true,
    callbacks: {
        session({session, token, user}) {
            session.user = token
            return session
        },
        redirect({url,baseUrl}){
            url="/chat"
            return url
        }
    }
}

export default NextAuth(authOptions)
