"use client"
import {getSession, SessionProvider} from "next-auth/react";

export const Providers=({children})=> {
    const session=getSession()
    return(
        <SessionProvider session={session}>{children}</SessionProvider>
    )
}