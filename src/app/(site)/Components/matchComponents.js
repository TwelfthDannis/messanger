"use client"
import Chat from "@/app/(site)/chat/page";
import Messages from "@/app/(site)/messages/page";
import Widget from "@/app/(site)/widget/page";
import {useState} from "react";

export default function MatchComponents({chats}){
    const [message,setMessage]=useState()
    const handleSetMessage = (id)=>{
        setMessage(id)
    }
    return (
        <div className="lg:grid lg:grid-cols-3 w-full gap-4 p-4">
            <Chat conversation={chats} takeChat={handleSetMessage}/>
            <Messages message={message}/>
            <Widget/>
        </div>
    )
}