"use client"
import MessageBox from "@/app/(site)/chat/[messagesId]/components/messageBox";
import {useEffect, useRef, useState} from "react";
import useConversation from "@/app/hooks/useConversation";
import axios from "axios";
import {pusherClient} from "@/app/lib/pusher";

const messageList = ({initialMessages}) => {
    const [messages, setMessages] = useState(initialMessages)
    const messagesRef = useRef(null)
    const {conversationId}=useConversation()
    useEffect(() => {
        axios.post(`/api/conversation/${conversationId}/seen`)
    }, [conversationId]);



    useEffect(() => {
        pusherClient.subscribe(conversationId)
        messagesRef?.current?.scrollIntoView()
        const messageHandler = (message) => {
            axios.post(`/api/conversations/${conversationId}/seen`);

            setMessages((current) => {
                if (current.find(msg => msg.id === message.id)) {
                    return current;
                }

                return [...current, message]
            });
            messagesRef?.current?.scrollIntoView()
        }
        const updateMessageHandler = (newMessage) => {
            setMessages((current) => current.map((currentMessage) => {
                if (currentMessage.id === newMessage.id) {
                    return newMessage;
                }

                return currentMessage;
            }));
        }
        pusherClient.bind('messages:new', messageHandler)
        pusherClient.bind('message:update', updateMessageHandler);

        return () => {
            pusherClient.unsubscribe(conversationId)
            pusherClient.unbind('messages:new', messageHandler)
            pusherClient.unbind('message:update', updateMessageHandler)
        }
    }, [conversationId]);

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