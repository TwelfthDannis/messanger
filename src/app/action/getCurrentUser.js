import getSession from "@/app/action/getSession";
import {prisma} from "@/app/lib/db";

const getCurrentUser=async()=>{
    try{
        const session = await getSession();
        if (!session.user.email){
            return null
        }
        const currentUser = await prisma.user.findUnique({
            where:{
                email:session.user.email
            }
        })
        if (!currentUser){
            return null
        }
        return currentUser
    }catch (e){
        return null
    }
}
export default getCurrentUser;