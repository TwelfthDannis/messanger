"use client"
import MessageBox from "@/app/(site)/chat/[messagesId]/components/messageBox";
import {useEffect, useRef, useState} from "react";

const messageList = ({initialMessages}) => {
    const [messages, setMessages] = useState(initialMessages)
    const messagesRef = useRef(null)

    useEffect(() => {
        messagesRef?.current?.scrollIntoView()

    }, []);

    return (
        <>
            <ul className="space-y-2 px-4 flex flex-1 flex-col text-violet-600 overflow-hidden overflow-y-auto py-3 scroll-smooth">
                {initialMessages?(messages.map((message) => (
                    <MessageBox key={message.id} data={message}/>
                ))):
                    <MessageBox/>
                }
                <div className="h-0" ref={messagesRef}></div>
            </ul>
        </>
    )
}
export default messageList