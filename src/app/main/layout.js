"use client"
import BurgerMenu from "@/app/(element)/main/burgerMenu";
import useOpenMenu from "@/app/(element)/(api)/api";
import Menu from "@/app/main/(menu)/page"
import Chats from "@/app/(element)/chat/page"
import Messages from "../messages/page"
import Widgets from "../widget/page"

export default function Layout() {
    const {openMenu, handleOpenMenu} = useOpenMenu()

    return (
        <>
            <div className="border-b border-zinc-900">
                <BurgerMenu handleOpenMenu={handleOpenMenu}/>
            </div>
            <div className="lg:hidden">
                <Chats/>
            </div>
            <div className="container lg:h-full m-auto flex items-center ">
                <div className="bg-zinc-900 rounded-3xl bg-opacity-60 overflow-hidden lg:h-3/4 lg:w-full lg:flex ">
                    <Menu openMenu={openMenu} handleOpenMenu={handleOpenMenu}/>
                    <div className="lg:grid grid-cols-3 w-full hidden">
                        <Chats/>
                        <Messages/>
                        <Widgets/>
                    </div>
                </div>
            </div>
        </>
    )
}
/*
<div className="lg:grid grid-cols-3 w-full hidden">
    <Chats/>
</div>*/
