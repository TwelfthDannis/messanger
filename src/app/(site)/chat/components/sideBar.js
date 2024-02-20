"use client"
import SearchInput from "@/app/(site)/chat/components/searchInput";
import AddChats from "@/app/(site)/chat/components/addChats";
import ChatList from "@/app/(site)/chat/components/chatList";
import SearchUser from "@/app/(site)/chat/components/searchUserList";
import {useEffect, useMemo, useState} from "react";
import {useSession} from "next-auth/react";
import {pusherClient} from "@/app/lib/pusher";
import {useRouter} from "next/navigation";


const SideBar=({conversation,user})=>{
    const [search,setSearch]=useState()
    const [items, setItems] = useState(conversation);
    const {data:session} = useSession();
    const router = useRouter();

    const pusherKey = useMemo(() => {
        return session?.user?.email
    }, [session?.user?.email])


    useEffect(() => {
        if (!pusherKey) {
            return;
        }

        pusherClient.subscribe(pusherKey);

        const updateHandler = (conversation) => {
            setItems((current) => current.map((currentConversation) => {
                if (currentConversation.id === conversation.id) {
                    return {
                        ...currentConversation,
                        messages: conversation.messages
                    };
                }

                return currentConversation;
            }));
        }

        const newHandler = (conversation) => {
            setItems((current) => {
                if (current.find(current, { id: conversation.id })) {
                    return current;
                }

                return [conversation, ...current]
            });
        }

        const removeHandler = (conversation) => {
            setItems((current) => {
                return [...current.filter((convo) => convo.id !== conversation.id)]
            });
        }

        pusherClient.bind('conversation:update', updateHandler)
        pusherClient.bind('conversation:new', newHandler)
        pusherClient.bind('conversation:remove', removeHandler)
    }, [pusherKey, router]);




    return(
        <div className="flex flex-col flex-1 overflow-hidden gap-4">
            <SearchInput search={setSearch}/>
            <div className="flex justify-between text-gray-300">
                <span className="text-lg font-bold">Chats</span>
                <AddChats/>
            </div>
            <ChatList conversation={conversation} user={user} search={search}/>
            {search?<SearchUser conversation={conversation} search={search} user={user}/>:""}
        </div>
    )
}

export default SideBar