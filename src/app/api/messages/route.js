import getCurrentUser from "@/app/action/getCurrentUser";
import {prisma} from "@/app/lib/db";
import {NextResponse} from "next/server";
import getConversationId from "@/app/action/getConversationId";


export async function POST(request){
    try {
        const {message,image,conversationId} = await request.json()
        const currentUser= await getCurrentUser()
        const conversation = await getConversationId(conversationId)
        if(conversation===null){

        }

        const newMessage = await prisma.message.create({
            include: {
                seen: true,
                sender: true
            },
            data: {
                body: message,
                image: image,
                conversation: {
                    connect: { id: conversationId}
                },
                sender: {
                    connect: { id: currentUser.id}
                },
                seen: {
                    connect: {id: currentUser.id}
                },
            }
        });


        const updatedConversation = await prisma.conversation.update({
            where: {
                id: conversationId
            },
            data: {
                lastMessageAt: new Date(),
                messages: {
                    connect: {id: newMessage.id}
                }
            },
            include: {
                users: true,
                messages: {
                    include: {seen: true}
                }
            }
        });

        const lastMessage=updatedConversation.messages[updatedConversation.messages.length-1]
        return NextResponse.json("OK", newMessage)
    }catch (error){
        console.log(error, 'ERROR_MESSAGES')
        return new NextResponse('Error', { status: 500 });
    }
}