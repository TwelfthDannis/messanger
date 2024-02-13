import {prisma} from "@/app/lib/db";
import getSession from "@/app/action/getSession";


export async function POST(req) {
    const {querySearch} = await req.json();
    const session= await getSession()
    try {
        const users = await prisma.user.findMany({
            where: {
                username: {
                    startsWith: querySearch
                },
                NOT:{
                    username:session?.user?.name
                }
            },
        });
        return new Response(JSON.stringify(users))
    } catch (err) {
        return new Response(500,"An error occurred while fetching users. ")
    }
}
