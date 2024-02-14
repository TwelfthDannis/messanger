"use server"
import {prisma} from "@/app/lib/db";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/lib/authOptions";

const getSearchUser = async(req)=>{
    const session = await getServerSession(authOptions)
    try {
        return await prisma.user.findMany({
            where:{
                username:{
                    startsWith:req
                },
                NOT: {
                    username: session.user.name
                }
            }
        })
    }catch(err) {
        return [];
    }
}
export default getSearchUser;