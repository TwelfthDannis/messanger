import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth, {NextAuthOptions} from "next-auth";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {prisma} from "./db";
import {compare} from "bcrypt";

export const authOptions:NextAuthOptions={
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXT_PUBLIC_SECRET,
    session:{
        strategy :"jwt",
        maxAge: 60*60,
        updateAge:24*60*60
    },
    pages:{
        signIn:"/log",
        signOut:"/logout",
        error:"/"
    },
    providers:[
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "email@gmail.com" },
                password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password){
                    return null;
                }

                const existingUser= await prisma.users.findUnique({
                    where:{email:credentials?.email}
                });
                if(!existingUser){
                    return null;
                }
                const passwordMatch = await compare(credentials.password,existingUser.password)
                if (!passwordMatch){
                    return null;
                }
                return {
                    id: `${existingUser.id}`,
                    name:existingUser.username,
                    email:existingUser.email,
                }
            }
        })
    ],
    debug:true,
    callbacks: {
        async jwt({token,user}){
            return ({...token,...user})
        }
    }
}

export default NextAuth(authOptions)
