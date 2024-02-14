import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import * as bcrypt from "bcrypt";
import {prisma} from "@/app/lib/db";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXT_PUBLIC_SECRET,
    pages: {
        signIn: "/auth/log",
    },
    providers: [
        CredentialsProvider({
            name: "Credential",
            credentials: {
                email: {label: "Email", type: "text", placeholder: "email"},
                name: {label: "Username", type: "text", placeholder: "Username"},
                password: {label: "Password", type: "password", placeholder: "password"}
            },
            async authorize(credentials) {
                const user = await prisma.user.findFirst({
                    where: {email: credentials?.email},
                });
                const valid = await bcrypt.compare(credentials?.password, user.password);
                if (!user || !valid) {
                    throw new Error("Invalid credentials");
                }
                return {...user,name: user.username};
            }
        })
    ],
    callbacks:{
      async jwt({token,user}){
          if(user){
              token.id=user.id;
          }
          return token
      },
      async session({session,token}){
          session.user.id=token.id;
          return session
      }
    },
    session: {
        strategy: "jwt",
    },
    debug: process.env.NODE_ENV === 'development',
};
const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};

