import {NextResponse} from "next/server";
import {prisma} from "../../lib/db"
import {hash} from "bcrypt";


export async function POST(req){
    try {
        const body=await req.json();
        const {email,username,password}=body;
        const existingUserByEmail= await prisma.users.findUnique({
                where: {email: email}
            }
        )
        if (existingUserByEmail){
            return NextResponse.json({users: null, message: "User with email already exists"},{status:409})
        }
        const existingUserByUsername= await prisma.users.findUnique({
                where: {username: username}
            }
        )
        if (existingUserByUsername){
            return NextResponse.json({users: null, message: "User with username already exists"},{status:409})
        }
        const hashPassword = await hash(password,12);
        const newUser = await prisma.users.create({
            data:{
                email,
                username,
                password: hashPassword
            }
        })
        const {password:newUserPassword,...rest} = newUser
        return NextResponse.json({users: rest, message: "User created successfully"},{status:201})
    }catch (err){
        return NextResponse.json({message: "Error creating user"},{status:500})
    }
}
