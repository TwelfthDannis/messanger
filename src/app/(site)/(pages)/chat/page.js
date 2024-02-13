"use client"
import SearchChat from "@/app/(site)/Components/ChatComponents/searchChat";
import ChatItem from "@/app/(site)/Components/ChatComponents/chatItem";
import AddChats from "@/app/(site)/Components/ChatComponents/addChats";
import {useState} from "react";
import SearchUser from "@/app/(site)/Components/ChatComponents/searchUser";

export default function Page({getChat}) {
    const[searchChat,setSearchChat]=useState("")
    const handleQuery=(query)=>{
        setSearchChat(query)
    }

    return (
        <div className="flex flex-col flex-1 overflow-hidden">
            <SearchChat querySearch={handleQuery}/>
            <div className="flex justify-between text-gray-300 my-3">
                <span className="text-lg font-bold">{searchChat?"Users":"Chats"}</span>
                <AddChats/>
            </div>
            <div className="overflow-y-auto scroll-smooth">
                {searchChat?(<SearchUser querySearch={searchChat} getChat={getChat}/>):(<ChatItem/>)}
            </div>
        </div>
    )
}