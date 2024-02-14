"use client"
import SearchChat from "@/app/(site)/Components/ChatComponents/searchChat";
import ChatItem from "@/app/(site)/Components/ChatComponents/chatItem";
import AddChats from "@/app/(site)/Components/ChatComponents/addChats";
import {useState} from "react";

export default function Page({conversation}) {
    const [searchUsers, setSearchUsers] = useState("")


    return (
        <div className="flex flex-col flex-1 overflow-hidden">
            <SearchChat setSearchUsers={setSearchUsers}/>
            <div className="flex justify-between text-gray-300 my-3">
                <span className="text-lg font-bold">Chats</span>
                <AddChats/>
            </div>
            <div className="overflow-y-auto scroll-smooth">
                <ChatItem conversation={conversation} searchUsers={searchUsers}/>
            </div>
        </div>
    )
}