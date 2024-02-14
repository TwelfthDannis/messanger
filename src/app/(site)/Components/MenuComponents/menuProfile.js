"use client"
import Image from "next/image";
import NoAvatar from "../../../../../public/no-avatar.jpg";
import {useSession} from "next-auth/react";

export default function menuProfile(){
    const {data:session}= useSession()
    return (
        <div className="flex items-center p-2 text-gray-300">
            <Image className="w-6 h-6 rounded-full object-cover" src={NoAvatar} alt="Avatar"/>
            <span className="ms-3 lg:hidden">{session?.user.name}</span>
        </div>
    )
}
