"use client"
import SearchInput from "@/app/(site)/chat/components/searchInput";
import AddChats from "@/app/(site)/chat/components/addChats";
import ChatList from "@/app/(site)/chat/components/chatList";
import SearchUser from "@/app/(site)/chat/components/searchUserList";
import {useState} from "react";


const SideBar=({conversation,user})=>{
    const [search,setSearch]=useState()

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