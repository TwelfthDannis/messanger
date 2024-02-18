import ChatList from "@/app/(site)/chat/components/chatList";
import AddChats from "@/app/(site)/chat/components/addChats";
import SearchInput from "@/app/(site)/chat/components/searchInput";

export default function Page() {
    return (
        <div className="flex flex-col flex-1 overflow-hidden gap-4">
            <SearchInput/>
            <div className="flex justify-between text-gray-300">
                <span className="text-lg font-bold">Chats</span>
                <AddChats/>
            </div>
            <ChatList/>
            <div className="w-full h-0.5 bg-zinc-900"/>
        </div>
    )
}