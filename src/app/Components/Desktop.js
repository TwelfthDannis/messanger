import {Suspense} from "react";
import Loading from "@/app/(site)/loading";
import Chat from "../(site)/chat/page"
import Messages from "@/app/(site)/chat/[messagesId]/page"
import Widget from "@/app/(site)/chat/widgetId/page"


const Desktop=()=>{
    return(
        <div className="lg:grid lg:grid-cols-3 w-full gap-4 p-4">
            <Suspense fallback={<Loading/>}>
                <Chat/>
                <Messages/>
                <Widget/>
            </Suspense>
        </div>
    )
}
export default Desktop