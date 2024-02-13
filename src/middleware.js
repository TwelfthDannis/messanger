import { NextResponse} from 'next/server';
import {getToken} from "next-auth/jwt";

export async function middleware(req) {
    const secret = process.env.NEXT_PUBLIC_SECRET
    try {
        const token = await getToken({req, secret});
        if (!token) {
            return new NextResponse('Unauthorized', {status: 401});
        }
        return NextResponse.next();
    } catch (error) {
        console.error('Middleware Error:', error);
        return new NextResponse('Internal Server Error', {status: 500});
    }
}
export const config = {
    matcher: ['/chat/:path*'],
};
