import {NextResponse} from "next/server";


export default async function middleware(req) {
    const path = req.nextUrl.pathname;
    if (path === '/') {
        return NextResponse.next();
    }

    const session = !!req.cookies.get("next-auth.session-token")

    const isProtected = path.includes('/Chat');
    console.log(path)

    if (!session && isProtected) {
        return NextResponse.redirect(new URL('/', req.url));
    } else if (session && (path === '/log' || path === '/reg' || path === '/')) {
        return NextResponse.redirect(new URL('/Chat', req.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/Chat","/log","/reg"]
};