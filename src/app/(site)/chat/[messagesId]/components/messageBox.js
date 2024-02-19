"use client"
import Image from "next/image";
import avatar from "@/../public/no-avatar.jpg";
import {useSession} from "next-auth/react";
import formatAMPM from "@/app/lib/formatAMPM";


const messageBox = ({data}) => {
    const {data: session} = useSession()
    return (
        data ? (
            <li className={`flex ${session?.user?.name === data.sender.username ? "flex-row-reverse" : ""} items-start w-full gap-2`}>
                <Image className="h-6 w-6 object-cover rounded-full" src={avatar}
                       alt={"avatar"}/>
                <div className="overflow-hidden break-words bg-zinc-900 p-2 rounded-xl text-md">
                    <div
                        className={`flex ${session?.user?.name === data.sender.username ? "flex-row-reverse" : ""} justify-between gap-2 text-xs`}>
                        <span>{data.sender.username}</span>
                        <span>{formatAMPM(data.createdAt)}</span>
                    </div>
                    <span>{data.body}</span>
                </div>
            </li>
        ) : ""
    )
}

export default messageBox