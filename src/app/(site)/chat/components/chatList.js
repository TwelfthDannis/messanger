"use client"
import {useMemo, useState} from "react";
import {useSession} from "next-auth/react";
import ChatBox from "@/app/(site)/chat/components/chatBox";


const ChatList = ({conversation, user}) => {

    const [items, setItems] = useState(conversation)
    const sessions = useSession()


    const pusherKey = useMemo(() => {
        return sessions.data?.user?.email
    }, [sessions.data?.user?.email])


    return (
        <ul className="rounded-xl text-gray-300 space-y-2 overflow-y-auto scroll-smooth">
            {items.map((item) => (
                <ChatBox key={item.id} data={item}/>
            ))}
            <div className="w-full h-0.5 bg-zinc-900"/>
        </ul>
    );
};

export default ChatList;
