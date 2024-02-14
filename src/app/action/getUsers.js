"use server"
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {prisma} from "@/app/lib/db";
export const getUsers=async()=>{
    const session = await getServerSession(authOptions)
    if (!session) return [];
    try {
        return await prisma.user.findMany({
            orderBy: {
                createdAt: "desc"
            },
            where: {
                NOT: {
                    email: session.user.email
                }
            }
        });
    }catch (err) {
        return [];
    }
}
export default getUsers;