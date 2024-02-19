"use client"
import Image from "next/image";
import avatar from "../../../../../../public/no-avatar.jpg";
import useOtherUser from "@/app/(site)/hooks/useOtherUser";


const UpperPanel = ({conversation}) => {
    const otherUser = useOtherUser(conversation)
    return (
        <div className="relative border-b border-zinc-800 h-14 bg-zinc-950 flex py-2 items-center rounded-t-xl">
            <div className="flex w-full justify-center items-center">
                <Image className="w-10 h-10 mr-2.5 text-center rounded-full ring-2 ring-gray-300 object-cover"
                       src={avatar}
                       alt="avatar"/>
                <div className="grid grid-rows-2 items-center">
                    <span className="font-bold text-gray-300">{conversation.name || otherUser.username}</span>
                    <span className="font-bold text-xs text-zinc-500">last active</span>
                </div>
            </div>
            <button className="p-2 m-2 absolute right-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                     stroke="currentColor" className="w-6 h-6 text-gray-300 ">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"/>
                </svg>
            </button>
        </div>
    )
}
export default UpperPanel