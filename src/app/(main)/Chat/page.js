"use client"
import Image from "next/image";
import { useState} from "react";
import avatarImage from "../../no-avatar.jpg";

export default function Page() {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    }
    const accountMes = [
        {
            avatar: avatarImage,
            name: "name1",
            lastMessage: "good",
            lastTimeMessage: "7:21PM"
        },
        {
            avatar: avatarImage,
            name: "name2",
            lastMessage: "good",
            lastTimeMessage: "7:21PM"
        },
    ]
    const filteredMessages = searchQuery ? accountMes.filter(({name}) => name.toLowerCase().includes(searchQuery.toLowerCase())) : accountMes;


    return (
        <div className="flex flex-col flex-1 overflow-hidden p-4">
            <form>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-300" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search"
                           className="bg-zinc-800 block w-full p-4 ps-10 text-sm text-gray-300 border-0 rounded-lg focus-visible:outline-0 focus:ring-blue-300 focus:border-blue-500 lg:bg-zinc-950"
                           placeholder="Search"
                           value={searchQuery}
                           onChange={handleSearch}

                    />
                </div>
            </form>
            <div className="flex justify-between text-gray-300 my-3">
                <span className="text-lg font-bold">Chats</span>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                    </svg>
                </button>
            </div>
            <div className="overflow-y-auto scroll-smooth">
                <ul className="rounded-xl text-gray-300 space-y-2">
                    {filteredMessages.map(({avatar, name, lastMessage, lastTimeMessage}, index) => (
                        <li key={index}>
                            <div
                                className="bg-zinc-800 p-2.5 rounded-lg flex items-center text-sm transition ease-linear duration-150 lg:hover:bg-zinc-950 lg:bg-transparent">
                                <Image
                                    className="w-10 h-10 box-border mr-2.5 text-center rounded-full ring-2 ring-gray-300 object-cover"
                                    src={avatar} alt="avatar"/>
                                <div className="flex-1 grid grid-rows-2 gap-1">
                                    <span className="block font-bold">{name}</span>
                                    <div className=" flex text-sm items-center overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="2" stroke="currentColor"
                                             className="min-w-4 h-4 block text-violet-600 mr-1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="m4.5 12.75 6 6 9-13.5"/>
                                        </svg>
                                        <span className="truncate text-gray-300">{lastMessage}</span>
                                    </div>
                                </div>
                                <div
                                    className="mb-auto text-zinc-500 right-0 whitespace-nowrap">{lastTimeMessage}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}