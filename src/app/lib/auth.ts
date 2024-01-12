import CredentialsProvider from "next-auth/providers/credentials"
import {NextAuthOptions} from "next-auth";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {prisma} from "./db";
import {compare} from "bcrypt";

export const authOptions:NextAuthOptions={
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    session:{
        strategy :"jwt"
    },
    pages:{
      signIn:"/login"
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
                    username:existingUser.username,
                    email:existingUser.email
                }
            }
        })
    ]
}