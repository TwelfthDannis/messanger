"use server"
import {prisma} from "@/app/lib/db";

const getSearchUser = async(req)=>{
    try {
        return await prisma.user.findMany({
            where:{
                username:{
                    startsWith:req
                }
            }
        })
    }catch(err) {
        return [];
    }
}
export default getSearchUser;