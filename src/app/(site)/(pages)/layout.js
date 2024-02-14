import Menu from "../Components/MenuComponents/menu";
import Chat from "../(pages)/chat/page"
import Messages from "@/app/(site)/(pages)/chat/messages/page"
import Widget from "../(pages)/widget/page"
import {Suspense} from "react";
import Loading from "@/app/(site)/Components/loading";
import getConversation from "@/app/action/getConversation";
import getConversationId from "@/app/action/getConversationId";


export default async function Layout({children}) {
    const chats= await getConversation()
    const conversation=chats?.map(item=>item.id);
    const setChat=[]
    if (Array.isArray(conversation)) {
        for (const id of conversation) {
            const res = await getConversationId(id);
            setChat.push(res)
        }
    }

    return (
        <div className="hidden overflow-hidden bg-zinc-900 bg-opacity-60 container h-3/4 rounded-3xl lg:flex">
            <Suspense fallback={<Loading/>}>
                <Menu/>
                <div className="lg:grid lg:grid-cols-3 w-full gap-4 p-4">
                    <Chat conversation={setChat}/>
                    <Messages/>
                    <Widget/>
                </div>
            </Suspense>
        </div>
    )
}


{/*            <div className="lg:hidden h-dvh w-full">
                <Header handleOpenMenu={handleOpenMenu}/>
                <Menu openMenu={openMenu} handleOpenMenu={handleOpenMenu}/>
                <div className="p-2">
                    {children}
                </div>
            </div>*/
}