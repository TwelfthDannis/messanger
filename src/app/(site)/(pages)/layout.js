"use client"
import Menu from "../Components/MenuComponents/menu";
import Chat from "../(pages)/chat/page"
import Messages from "@/app/(site)/(pages)/chat/messages/page"
import Widget from "../(pages)/widget/page"
import {useState} from "react";
import NotSelected from "@/app/(site)/Components/NotSelected";

export default function layout({children}) {
    const [openMenu, setOpenMenu] = useState(false);
    const [getChat,setGetChat] = useState(0);
    const handleChat=(query)=>{
        setGetChat(query)
        console.log(query)
    }
    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <div className="hidden overflow-hidden bg-zinc-900 bg-opacity-60 container h-3/4 rounded-3xl lg:flex">
                <Menu/>
                <div className="lg:grid lg:grid-cols-3 w-full gap-4 p-4">
                    <Chat getChat={handleChat}/>
                    {getChat===0?(<NotSelected/>):(<Messages getChat={getChat}/>)}
                    <Widget/>
                </div>
            </div>
{/*            <div className="lg:hidden h-dvh w-full">
                <Header handleOpenMenu={handleOpenMenu}/>
                <Menu openMenu={openMenu} handleOpenMenu={handleOpenMenu}/>
                <div className="p-2">
                    {children}
                </div>
            </div>*/}
        </>
    )
}