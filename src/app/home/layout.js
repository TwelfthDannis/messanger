"use client"
import BurgerMenu from "./burgerMenu";
import useOpenMenu from "../api/function";
import Menu from "./(menu)/page";
import Chats from "../chat/page";
import Messages from "../messages/page";
import Widgets from "../widget/page";

export default function Layout() {
    const {openMenu, handleOpenMenu} = useOpenMenu()

    return (
        <>
            <header>
                <div className="border-b border-zinc-900">
                    <BurgerMenu handleOpenMenu={handleOpenMenu}/>
                </div>
            </header>
            <main>
                <div className="lg:hidden">
                    <Menu openMenu={openMenu} handleOpenMenu={handleOpenMenu}/>
                    <Chats/>
                </div>
                <div className="h-dvh lg:flex hidden ">
                    <div className="overflow-hidden bg-zinc-900 bg-opacity-60 container m-auto h-3/4 rounded-3xl lg:flex">
                        <Menu openMenu={openMenu} handleOpenMenu={handleOpenMenu}/>
                        <div className="lg:grid lg:grid-cols-3 w-full gap-4">
                            <Chats/>
                            <Messages/>
                            <Widgets/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

