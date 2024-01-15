"use client"
import Menu from "./menu";
import Chats from "./Chat/page";
import Messages from "./Messages/page";
import Widgets from "./widget/page";

const Layout = () => (
    <main>
        <div className="h-dvh lg:flex hidden ">
            <div className="overflow-hidden bg-zinc-900 bg-opacity-60 container m-auto h-3/4 rounded-3xl lg:flex">
                <Menu />
                <div className="lg:grid lg:grid-cols-3 w-full gap-4 p-4">
                    <Chats />
                    <Messages />
                    <Widgets />
                </div>
            </div>
        </div>
    </main>
);

export default Layout;
