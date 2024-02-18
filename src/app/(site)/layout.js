import {Suspense} from "react";
import Loading from "@/app/(site)/Components/loading";
import Menu from "@/app/(site)/menu/page"
import Chat from "@/app/(site)/chat/page";
import Messages from "@/app/(site)/messages/page";
import Widget from "@/app/(site)/widget/page";


export default function Layout() {
    return (
        <div className="hidden overflow-hidden bg-zinc-900 bg-opacity-60 container h-3/4 rounded-3xl lg:flex">
            <Suspense fallback={<Loading/>}>
                <Menu/>
                <div className="lg:grid lg:grid-cols-3 w-full gap-4 p-4">
                    <Chat/>
                    <Messages/>
                    <Widget/>
                </div>
            </Suspense>
        </div>
    )
}