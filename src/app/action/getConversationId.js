import getCurrentUser from "@/app/action/getCurrentUser";
import {prisma} from "@/app/lib/db";


const getConversationId=async(conversationId)=>{
    try {
        const currentUser=await getCurrentUser();
        if(!currentUser) return null
        return await prisma.conversation.findUnique({
            where: {
                id: conversationId
            },
            include: {
                users: true
            }
        })
    }catch (err){
        return null
    }
}