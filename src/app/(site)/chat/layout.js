import getConversation from "@/app/action/getConversation";
import getUsers from "@/app/action/getUsers";
import SearchInput from "@/app/(site)/chat/components/searchInput";
import AddChats from "@/app/(site)/chat/components/addChats";
import ChatList from "@/app/(site)/chat/components/chatList";
import SearchUser from "@/app/(site)/chat/components/searchUser";
import WidgetPage from "@/app/(site)/chat/widgetId/page";

const Layout = async ({children}) => {
    const conversation = await getConversation()
    const user = await getUsers()

    return (
        <>
            <div className="flex flex-col flex-1 overflow-hidden gap-4">
                <SearchInput/>
                <div className="flex justify-between text-gray-300">
                    <span className="text-lg font-bold">Chats</span>
                    <AddChats/>
                </div>
                <ChatList conversation={conversation} user={user}/>
                <SearchUser/>
            </div>
            {children}
            <WidgetPage/>
        </>
    )
}
export default Layout