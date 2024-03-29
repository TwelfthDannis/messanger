"use client"
import Image from "next/image";
import avatarImage from "../../../../../public/no-avatar.jpg";
import useOtherUser from "@/app/hooks/useOtherUser";
import {useRouter} from "next/navigation";
import {useCallback} from "react";
import formatAMPM from "@/app/lib/formatAMPM";


const ChatBox=({data})=>{
    const otherUser = useOtherUser(data)
    const router = useRouter()
    const message=data.messages[data.messages.length - 1]

    const handleClick=useCallback(()=>{
        router.push(`/chat/${data.id}`)
    },[data.id,router])

    return (
        <li onClick={handleClick}>
            <div
                className="bg-zinc-800 p-2.5 rounded-lg flex gap-2.5 items-center text-sm transition ease-linear duration-150 lg:hover:bg-zinc-950 lg:bg-transparent">
                <Image className="w-10 h-10 box-border text-center rounded-full ring-2 ring-gray-300 object-cover"
                       src={avatarImage} alt="avatar"/>
                <div className="flex-1 grid grid-rows-2 gap-1">
                    <span className="block font-bold">{data.name || otherUser.username}</span>
                    <div className="flex text-sm items-center overflow-hidden">
                        {message?.seen.length>1?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0  0  24  24"
                             strokeWidth="2" stroke="currentColor"
                             className="min-w-4 h-4 block text-violet-600 mr-1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5  12.75  6  6  9-13.5"/>
                        </svg>:""}
                        <span className="truncate text-gray-300">{message?.body || ""}</span>
                    </div>
                </div>
                <div className="mb-auto text-zinc-500 right-0 whitespace-nowrap">{formatAMPM(data.lastMessageAt)}</div>
            </div>
        </li>
    )
}
export default ChatBox