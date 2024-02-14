"use client"
import Image from "next/image";
import avatarImage from "@/../public/no-avatar.jpg";
import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import getUsers from "@/app/action/getUsers";

const formatAMPM = date => {
    const [hours, minutes] = [date.getHours() % 12 || 12, date.getMinutes()];
    const ampm = hours >= 12 ? "PM" : "AM";
    return `${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
};

export default function ChatItem({conversation, searchUsers}) {
    const {data: session} = useSession()
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            if (searchUsers) {
                const response = await getUsers();
                console.log(searchUsers)
                setUsers(response.filter(user => user.username.startsWith(searchUsers)))
            }
        };
        fetchData();
    }, [searchUsers]);

    const Conversations = () => {
        return (
            <>
                {conversation.map(item => (
                    <li key={item.id}>
                        <div
                            className="bg-zinc-800 p-2.5 rounded-lg flex items-center text-sm transition ease-linear duration-150 lg:hover:bg-zinc-950 lg:bg-transparent">
                            <Image
                                className="w-10 h-10 box-border mr-2.5 text-center rounded-full ring-2 ring-gray-300 object-cover"
                                src={avatarImage} alt="avatar"/>
                            <div className="flex-1 grid grid-rows-2 gap-1">
                            <span
                                className="block font-bold">{item.name || item.users.filter(user => user.username !== session?.user.name)[0].username}</span>
                                <div className="flex text-sm items-center overflow-hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="2"
                                         stroke="currentColor" className="min-w-4 h-4 block text-violet-600 mr-1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                                    </svg>
                                    <span className="truncate text-gray-300">Message</span>
                                </div>
                            </div>
                            <div
                                className="mb-auto text-zinc-500 right-0 whitespace-nowrap">{formatAMPM(new Date(item.lastMessageAt))}</div>
                        </div>
                    </li>))
                }
            </>
        )
    }
    const User=()=>{
        return(
            <>
                {users.map(item => (
                    <li key={item.id}>
                        <div
                            className="bg-zinc-800 p-2.5 rounded-lg flex items-center text-sm transition ease-linear duration-150 lg:hover:bg-zinc-950 lg:bg-transparent">
                            <Image
                                className="w-10 h-10 box-border mr-2.5 text-center rounded-full ring-2 ring-gray-300 object-cover"
                                src={avatarImage} alt="avatar"/>
                            <div className="flex-1 grid grid-rows-2 gap-1">
                            <span
                                className="block font-bold">{item.username}</span>
                            </div>
                        </div>
                    </li>))
                }
            </>
        )
    }

    return (
        <ul className="rounded-xl text-gray-300 space-y-2">
            {searchUsers?(<User/>):(<Conversations/>)}
            <div className="w-full h-0.5 bg-zinc-900"/>
        </ul>
    );
}
