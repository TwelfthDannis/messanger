import getCurrentUser from "@/app/action/getCurrentUser";
import {prisma} from "@/app/lib/db";


export async function POST(req){
    try {
        const body = await req.json()
        const {message,image,conversationIds} = body
        const currentUser= await getCurrentUser()
        if (conversationIds){
        }
        return new Response("OK", body)
    }catch (error){
        console.log(error)
    }
}