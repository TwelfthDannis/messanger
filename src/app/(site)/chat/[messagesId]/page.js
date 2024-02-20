import UpperPanel from "@/app/(site)/chat/[messagesId]/components/upperPanel";
import DownPanel from "@/app/(site)/chat/[messagesId]/components/downPanel";
import getConversationId from "@/app/action/getConversationId";
import getMessages from "@/app/action/getMessages";
import MessageList from "@/app/(site)/chat/[messagesId]/components/messageList";
import NotSelected from "@/app/(site)/NotSelected";

const MessagePage = async ({params}) => {
    const conversation = await getConversationId(params.messagesId)
    const messages= await getMessages(params.messagesId)

    if (!conversation){
        return (
            <div className="overflow-hidden flex flex-col h-dvh lg:h-full lg:bg-zinc-950 lg:bg-opacity-60 lg:rounded-xl">
                <NotSelected/>
            </div>
        )
    }
    return (
        <div className="overflow-hidden flex flex-col h-dvh lg:h-full lg:bg-zinc-950 lg:bg-opacity-60 lg:rounded-xl">
            <UpperPanel conversation={conversation}/>
            <MessageList initialMessages={messages}/>
            <DownPanel/>
        </div>
    )
}
export default MessagePage