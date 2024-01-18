"use client"
import Menu from "../Components/menu";
import Chat from "../(pages)/chat/page"
import Messages from "@/app/(site)/(pages)/chat/messages/page"
import Widget from "../(pages)/widget/page"
import NotSelected from "../Components/NotSelected"
import {usePathname} from "next/navigation";
import Header from "@/app/(site)/Components/header";
import {useState} from "react";

export default function layout({children}) {
    const pathname = usePathname()
    const countFlash = pathname.split("/").length - 1

    const [openMenu,setOpenMenu]=useState(false)
    const handleOpenMenu=()=>{
        setOpenMenu(!openMenu)
    }

    return (
        <>
            <div className="hidden overflow-hidden bg-zinc-900 bg-opacity-60 container h-3/4 rounded-3xl lg:flex">
                <Menu/>
                <div className="lg:grid lg:grid-cols-3 w-full gap-4 p-4">
                    <Chat/>
                    {countFlash > 1 ? <Messages/> : <NotSelected/>}
                    <Widget/>
                </div>
            </div>
            <div className="lg:hidden h-dvh w-full">
                <Header handleOpenMenu={handleOpenMenu}/>
                <Menu openMenu={openMenu} handleOpenMenu={handleOpenMenu}/>
                <div className="p-2">
                    {children}
                </div>
            </div>
        </>
    )
}