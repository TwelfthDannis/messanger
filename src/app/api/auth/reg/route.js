import {prisma} from "@/app/lib/db";
import * as bcrypt from "bcrypt";


export async function POST(req) {
    try {
        const data = await req.json();
        if (await prisma.user.findFirst({where: {OR: [{ email: data.email }, { username: data.username }]}}))
        {return new Response("Error: User already exists",{status:400})}
        data.password=await bcrypt.hash(data.password,12)
        await prisma.user.create({data})
        return new Response("Success", { status: 200 });
    } catch (e) {
        return new Response("Error", { status: 500 });
    }
}

