import {prisma} from "@/app/lib/db";

const getMessages=async(conversationId)=>{
    try {
        return await prisma.message.findMany({
            where: {
                conversationId: conversationId
            },
            include: {
                sender: true,
                seen: true
            },
            orderBy: {
                createdAt: "asc"
            }
        });
    }catch(err) {
        return [];
    }
}
export default getMessages;