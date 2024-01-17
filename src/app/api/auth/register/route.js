import {NextResponse} from "next/server";
import {prisma} from "@/app/lib/db"
import {hash} from "bcrypt";


export async function POST(req){
    const handleUserExists = async (field, value, message) => {
        const existingUser = await prisma.user.findFirst({
            where: { [field]: value }
        });

        if (existingUser) {
            return NextResponse.json({ user: null, message }, { status: 409 });
        }
    };
    try {
        const body = await req.json();
        const { email, username, password } = body;

        await handleUserExists('email', email, 'User with email already exists');
        await handleUserExists('username', username, 'User with username already exists');

        const hashPassword = await hash(password, 12);
        const newUser = await prisma.user.create({
            data:{
                email,
                username,
                password: hashPassword
            }
        })
        const {password:newUserPassword,...rest} = newUser
        return NextResponse.json({user: rest, message: "User created successfully"},{status:201})
    }catch (err){
        return NextResponse.json({message: "Error creating user"},{status:500})
    }
}
