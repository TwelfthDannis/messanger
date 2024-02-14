"use server"
import {getServerSession} from "next-auth";
import {prisma} from "@/app/lib/db";
import {authOptions} from "@/app/lib/authOptions";
const getUsers=async()=>{
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