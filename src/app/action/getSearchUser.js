import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {prisma} from "@/app/lib/db";

export const geSearchUser=async()=>{
    const session = await getServerSession(authOptions)
    if (!session) return [];
    try {
        return await prisma.user.findMany({
            where: {
                NOT: {
                    email: session.user.email
                },
                username:{
                    startsWith:"q"
                }
            }
        });
    }catch (err) {
        return [];
    }
}
export default geSearchUser;