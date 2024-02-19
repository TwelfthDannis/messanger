"use client"
import {useEffect, useMemo, useState} from "react";
import {useSession} from "next-auth/react";
import ChatBox from "@/app/(site)/chat/components/chatBox";


const ChatList = ({conversation, user, search}) => {

    const [items, setItems] = useState(conversation)
    const {data:sessions} = useSession()
    useEffect(() => {
        if (search) {
            const filteredItems = conversation.filter(item => {
                if(item.name===null){
                    return item.users.some(user => user.username.toLowerCase().startsWith(search.toLowerCase()) && user.username!==sessions?.user.name);
                }
                return item?.name.toLowerCase().startsWith(search.toLowerCase())
            });
            setItems(filteredItems);
        }else{
            setItems(conversation)
        }
    }, [conversation, search]);

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
