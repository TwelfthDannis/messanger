"use client"
import {useSession} from "next-auth/react";
import avatarImage from "@/../public/no-avatar.jpg"
import Image from "next/image";

const formatAMPM = date => {
    const [hours, minutes] = [date.getHours() % 12 || 12, date.getMinutes()];
    const ampm = hours >= 12 ? "PM" : "AM";
    return `${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
};


const ChatList = () => {
    const {data: session} = useSession();

    return (
        <ul className="rounded-xl text-gray-300 space-y-2 overflow-y-auto scroll-smooth">
            <li>
                <div
                    className="bg-zinc-800 p-2.5 rounded-lg flex items-center text-sm transition ease-linear duration-150 lg:hover:bg-zinc-950 lg:bg-transparent">
                    <Image
                        className="w-10 h-10 box-border mr-2.5 text-center rounded-full ring-2 ring-gray-300 object-cover"
                        src={avatarImage} alt="avatar"/>
                    <div className="flex-1 grid grid-rows-2 gap-1">
                        <span className="block font-bold">Name</span>
                        <div className="flex text-sm items-center overflow-hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0  0  24  24"
                                 strokeWidth="2" stroke="currentColor"
                                 className="min-w-4 h-4 block text-violet-600 mr-1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5  12.75  6  6  9-13.5"/>
                            </svg>
                            <span className="truncate text-gray-300">Message</span>
                        </div>
                    </div>
                    <div
                        className="mb-auto text-zinc-500 right-0 whitespace-nowrap">Data
                    </div>
                </div>
            </li>
        </ul>
    );
};

export default ChatList;
