import getCurrentUser from "@/app/action/getCurrentUser";
import {prisma} from "@/app/lib/db";

export async function POST(req){
    try {
        const currentUser = await getCurrentUser()
        const body = await req.json();

/*        if (isGroup) {
            const newConversation = await prisma.conversation.create({
                data: {
                    name,
                    isGroup,
                    users: {
                        connect: [
                            ...members.map((member: { value: string }) => ({
                                id: member.value
                            })),
                            {
                                id: currentUser.id
                            }
                        ]
                    }
                },
                include: {
                    users: true,
                }
            });
        }

        const existingConversations = await prisma.conversation.findMany({
            where: {
                OR: [
                    {
                        userIds: {
                            equals: [currentUser.id, userId]
                        }
                    },
                    {
                        userIds: {
                            equals: [userId, currentUser.id]
                        }
                    }
                ]
            }
        });

        const singleConversation = existingConversations[0];

        if (singleConversation) {
            return Response.json(singleConversation);
        }*/

    /*    const newConversation = await prisma.conversation.create({
            data: {
                users: {
                    connect: [
                        {
                            id: currentUser.id
                        },
                        {
                            id: body.id
                        }
                    ]
                }
            },
            include: {
                users: true
            }
        });*/

        return Response.json('newConversation')
    }catch (err){
        console.log(err)
    }
}