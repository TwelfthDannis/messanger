import {prisma} from "@/app/lib/db";
import getCurrentUser from "@/app/action/getCurrentUser";

const getMessages=async()=>{
    const currentUser= await getCurrentUser()
    if(!currentUser.id)return null;
    try {
        const conversation=await prisma.conversation.findMany({
            orderBy:{
                lastMessageAt:"desc"
            },
            where:{
              userIds:{
                  has:currentUser.id
              }
            },
            include:{
                users:true,
                messages:{
                    include:{
                        seen:true,
                        sender:true
                    }
                }
            }
        })
        return conversation
    }catch(err) {
        return [];
    }
}
export default getMessages;